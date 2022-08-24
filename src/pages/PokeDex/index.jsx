import { useState, useEffect, useMemo } from 'react';
import Pokedex from 'pokedex-promise-v2';

import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
import PokemonCard from '../../components/PokemonCard';
import PageNavigator from '../../components/PageNavigator';
import getIdByUrl from '../../utils/getIdByUrl';

import {
    PokedexScreen,
    CardsContainer,
    PokedexWrapper
} from './styles';

const PokeDex = () => {

    const pokedexAPI = useMemo(() => new Pokedex(), []);

    const POKEMON_MAX_QUANTITY = 809;
    const POKEMON_PER_PAGE = 96;
    const [allPokemons, setAllPokemons] = useState([]);
    const [selectedPokemons, setSelectedPokemons] = useState([]);
    const [showPokemons, setShowPokemons] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        pokedexAPI.getPokemonsList({ limit: POKEMON_MAX_QUANTITY }).then((response) => {
            let temp_pokemons = [];
            response.results.forEach((pokemon) => {
                let data = {
                    'id': getIdByUrl(pokemon.url),
                    'name': pokemon.name
                }
                temp_pokemons.push(data);
            })
            setAllPokemons(temp_pokemons);
            setSelectedPokemons(temp_pokemons);
        })
    }, [pokedexAPI]);

    const [search, setSearch] = useState('');
    useEffect(() => {
        setPage(0);
        const findedPokemons = allPokemons.filter((pokemon) => (pokemon.name).toLowerCase().includes(search.toLowerCase()));
        setSelectedPokemons(findedPokemons);
    }, [search, allPokemons]);
    
    useEffect(() => {
        const offset = POKEMON_PER_PAGE*page; 
        const limit = offset + Math.min(POKEMON_PER_PAGE, POKEMON_MAX_QUANTITY-(offset));
        setShowPokemons(selectedPokemons.slice(offset, limit));
    }, [selectedPokemons, page]);
    
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
            <PokedexWrapper>      
                <SearchBar 
                    placeholder='Name' 
                    search={search} 
                    setSearch={setSearch}
                />
                <CardsContainer>
                    {
                        showPokemons.map((data, index) => (
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
                    disableNext={showPokemons.length < POKEMON_PER_PAGE}
                />
            </PokedexWrapper>
        </PokedexScreen>
    )
}

export default PokeDex;