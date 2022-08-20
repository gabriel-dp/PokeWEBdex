import { useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
import getIdByUrl from '../../utils/getIdByUrl';
import PokemonCard from '../../components/PokemonCard';

import {
    PokedexScreen,
    CardsContainer
} from './styles';

const PokeDex = () => {

    const POKEMON_MAX_QUANTITY = 809;

    const pokedexAPI = new Pokedex();
    const [pokemons, setPokemons] = useState([]);

    pokedexAPI.getPokemonsList({
        offset: 0,
        limit: POKEMON_MAX_QUANTITY
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
        setPokemons(temp_pokemons);
    })

    return (
        <PokedexScreen>
            <CardsContainer>
                {
                    pokemons.map((data, index) => (
                        <PokemonCard
                            key={index}
                            id={data.id}
                            name={data.name}
                        />
                    ))
                }
            </CardsContainer>
        </PokedexScreen>
    )
}

export default PokeDex;