import { useState, useEffect, useMemo } from 'react';
import Pokedex from 'pokedex-promise-v2';

import NavBar from '../../components/NavBar';
import PokemonCard from '../../components/PokemonCard';
import PageNavigator from '../../components/PageNavigator';
import getIdByUrl from '../../utils/getIdByUrl';

import {
    PokedexScreen,
    CardsContainer
} from './styles';

const PokeDex = () => {

    const pokedexAPI = useMemo(() => new Pokedex(), []);

    const POKEMON_MAX_QUANTITY = 809;
    const POKEMON_PER_PAGE = 96;
    const [allPokemons, setAllPokemons] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        pokedexAPI.getPokemonsList({
            offset: POKEMON_PER_PAGE*page,
            limit: Math.min(POKEMON_MAX_QUANTITY-(POKEMON_PER_PAGE*page), POKEMON_PER_PAGE),
        })
        .then((response) => {
            let temp_pokemons = [];
            response.results.forEach((pokemon) => {
                let data = {
                    'id': getIdByUrl(pokemon.url),
                    'name': pokemon.name
                }
                temp_pokemons.push(data);
            })
            setAllPokemons(temp_pokemons);
        })
    }, [pokedexAPI, page]);

    const handlePreviousPage = () => {
        setPage(page-1);
    }
    const handleNextPage = () => {
        setPage(page+1);
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }

    return (
        <PokedexScreen>
            <NavBar/>
            <CardsContainer>
                {
                    allPokemons.map((data, index) => (
                        <PokemonCard
                            key={index}
                            id={data.id}
                            name={data.name}
                        />
                    ))
                }
            </CardsContainer>
            <PageNavigator
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}
                disablePrevious={page === 0}
                disableNext={allPokemons.length < POKEMON_PER_PAGE}
            />
        </PokedexScreen>
    )
}

export default PokeDex;