import { useState, useEffect, useMemo } from 'react';
import Pokedex from 'pokedex-promise-v2';

import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
import PokemonCard from '../../components/PokemonCard';
import PageNavigator from '../../components/PageNavigator';

import { writeStorage, getStorage } from '../../utils/sessionStorage';
import { getIdByUrl, fixedId } from '../../utils/IdManage';

import { PokedexScreen, CardsContainer, PokedexWrapper } from './styles';

const POKEMON_MAX_QUANTITY = 905; // Gen8 end (Enamorus)
const POKEMON_PER_PAGE = 96; // Number divisible by 1, 2, 3, 4

function PokeDex() {
	const pokedexAPI = useMemo(() => new Pokedex(), []);

	const [allPokemons, setAllPokemons] = useState([]); // all the pokemons defined on max quantity
	const [selectedPokemons, setSelectedPokemons] = useState([]); // all the pokemons selected
	const [showPokemons, setShowPokemons] = useState([]); // pokemon selected to be displayed in the actual page

	useEffect(() => {
		// gets the id and name of all pokemons
		pokedexAPI.getPokemonsList({ limit: POKEMON_MAX_QUANTITY }).then((response) => {
			const tempPokemons = [];
			response.results.forEach((pokemon) => {
				const data = {
					id: getIdByUrl(pokemon.url),
					name: pokemon.name,
				};
				tempPokemons.push(data);
			});
			setAllPokemons(tempPokemons);
			setSelectedPokemons(tempPokemons);
		});

		// changes page title to default
		document.title = 'PokéWEBdex';
	}, [pokedexAPI]);

	const [page, setPage] = useState(parseInt(getStorage('page', 0), 10));
	useEffect(() => {
		// defines the pokemons that will be displayed in the actual page
		const offset = POKEMON_PER_PAGE * page;
		const limit = offset + Math.min(POKEMON_PER_PAGE, POKEMON_MAX_QUANTITY - offset);
		setShowPokemons(selectedPokemons.slice(offset, limit));
	}, [selectedPokemons, page]);

	const changePageTo = (newPage) => {
		writeStorage('page', newPage);
		setPage(newPage);
	};
	const goToPreviousPage = () => {
		changePageTo(Math.max(0, page - 1));
	};
	const goToNextPage = () => {
		changePageTo(Math.min(Math.ceil(selectedPokemons.length / POKEMON_PER_PAGE), page + 1));
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const [search, setSearch] = useState(getStorage('search', ''));
	// updates the selected pokemons on every change in search bar
	useEffect(() => {
		const previousSearch = getStorage('search');
		writeStorage('search', search);

		// If the search contains numbers, searches by ID instead of NAME
		const property = /\d/.test(search) ? 'id' : 'name';
		const findedPokemons = allPokemons.filter((pokemon) =>
			pokemon[property].toLowerCase().includes(search.toLowerCase())
		);
		setSelectedPokemons(findedPokemons);

		// Change page to 0 when search changes
		if (previousSearch !== search) {
			changePageTo(0);
		}
	}, [search, allPokemons]);

	return (
		<PokedexScreen>
			<NavBar
				changePageTo={changePageTo}
				setSearch={setSearch}
			/>
			<PokedexWrapper>
				<SearchBar
					placeholder="Name or Id"
					value={search}
					setSearch={setSearch}
				/>
				<PageNavigator
					goToPreviousPage={goToPreviousPage}
					goToNextPage={goToNextPage}
					disablePrevious={page === 0}
					disableNext={showPokemons.length < POKEMON_PER_PAGE}
				/>
				<CardsContainer>
					{showPokemons.map((data) => (
						<PokemonCard
							key={data.id}
							id={fixedId(data.id)}
							name={data.name}
						/>
					))}
				</CardsContainer>
				<PageNavigator
					goToPreviousPage={goToPreviousPage}
					goToNextPage={goToNextPage}
					disablePrevious={page === 0}
					disableNext={showPokemons.length < POKEMON_PER_PAGE}
				/>
			</PokedexWrapper>
		</PokedexScreen>
	);
}

export default PokeDex;
