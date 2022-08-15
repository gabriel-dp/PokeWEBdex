import Pokedex from 'pokedex-promise-v2';
import { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';

import {
    PokedexScreen,
    CardsContainer
} from './styles';

function getIdByUrl (url) {
    if (url) {
        const urlStart = 'https://pokeapi.co/api/v2/';
        const id = (url).replace(urlStart, '').match(/\d+/)[0];
        return id;
    }
}

const PokeDex = () => {

    const P = new Pokedex();
    
    const [pokemons, setPokemons] = useState([]);

    P.getPokemonsList({
        offset: 0,
        limit: 1000
    })
    .then((response) => {
        let temp_pokemons = [];
        response.results.forEach((pokemon) => {
            let data = {
                'id': getIdByUrl(pokemon.url),
                'name': pokemon.name,
                'types': ['water', 'grass']
            }
            temp_pokemons.push(data);
        })
        setPokemons(temp_pokemons);
    })

    return (
        <PokedexScreen>
            <CardsContainer>
                {
                    pokemons.slice(0, 905).map((data, index) => (
                        <PokemonCard
                            key={index}
                            id={data.id}
                            name={data.name}
                            types={data.types}
                        />
                    ))
                }
            </CardsContainer>
        </PokedexScreen>
    )
}

export default PokeDex;