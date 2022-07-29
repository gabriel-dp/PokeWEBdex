import { useState } from 'react';
import Pokedex from 'pokedex-promise-v2';

const PokeAPI = new Pokedex();

export function PokeAPIgetPokemonByName (name) {
    const [data, setData] = useState();
    PokeAPI.getPokemonByName(name)
        .then((response) => {
            console.log(response);
            setData(response);
        })
        .catch((error) => {
            console.log('There was an ERROR: ', error);
        });
    return data;
}