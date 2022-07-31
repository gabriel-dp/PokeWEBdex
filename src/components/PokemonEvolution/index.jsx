import { useState, useEffect } from 'react';
import PokemonImage from '../PokemonImage';
import {
    EvolutionsContainer,
    PokemonContainer,
    ImageContainer,
    Arrow,
    PokemonName,
    NotEvolvesText
} from './styles';

function getIdByUrl (url) {
    if (url) {
        const urlStart = 'https://pokeapi.co/api/v2/';
        const id = (url).replace(urlStart, '').match(/\d+/)[0];
        return id;
    }
}

const RecursiveEvolution = ({ id, name, evolves_to, stage=0, original }) => {
    const is_original = (original === name);
    return (
        <>
            <PokemonContainer stage={stage}>
                {
                    stage > 0 ? <Arrow stage={stage}/> : ''
                }
                <ImageContainer is_original={is_original}>
                    <PokemonImage id={id}/>
                </ImageContainer>
                <PokemonName is_original={is_original}>{name}</PokemonName>
            </PokemonContainer>
            { 
                evolves_to && evolves_to.map((evolution) => (
                    <RecursiveEvolution 
                        key={getIdByUrl(evolution.species.url)}
                        id={getIdByUrl(evolution.species.url)}
                        name={evolution.species.name} 
                        evolves_to={evolution.evolves_to}
                        stage={stage+1}
                        original={original}
                    />
                ))
            }
        </>
    )
}

const PokemonEvolution = ({ pokedex, name, children }) => {

    const [dataAPI, setDataAPI] = useState({
        'chain': {
            'evolves_to': [],
            'species': {
                'name': ''
            }
        }
    });

    useEffect(() => {
        if (name !== '') {
            pokedex.getPokemonSpeciesByName(name, (response, error) => {
                if(!error) {
                    pokedex.getEvolutionChainById(getIdByUrl(response.evolution_chain.url), (response2, error2) => {
                        if (!error2) {
                            setDataAPI(response2);
                        } else {
                            console.log(error);
                        }
                    });
                } else {
                    console.log(error);
                }
            });
        }
    }, [pokedex, name]);

    return (
        <EvolutionsContainer>
            {children}
            {
                (dataAPI.chain.evolves_to).length !== 0 
                ? <RecursiveEvolution 
                    id={getIdByUrl(dataAPI.chain.species.url)} 
                    name={dataAPI.chain.species.name} 
                    evolves_to={dataAPI.chain.evolves_to}
                    original={name}
                />
                : <NotEvolvesText>This Pokémon does not evolve.</NotEvolvesText>
            }
        </EvolutionsContainer>
    )
}

export default PokemonEvolution;