import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getIdByUrl } from '../../utils/IdManage';
import PokemonImage from '../PokemonImage';

import {
    EvolutionsContainer,
    PokemonContainer,
    ImageContainer,
    Arrow,
    PokemonName,
    NotEvolvesText
} from './styles';

const RecursiveEvolution = ({ id, name, evolves_to, stage=0, original }) => {
    const is_original = (original === name);
    return (
        <>
            <PokemonContainer stage={stage}>
                {
                    stage > 0 ? <Arrow stage={stage}/> : ''
                }
                <Link to={`${name}`}>
                    <ImageContainer is_original={is_original}>
                        <PokemonImage id={id}/>
                    </ImageContainer>
                </Link>
                <Link to={`${name}`}>
                    <PokemonName is_original={is_original}>{name}</PokemonName>
                </Link>
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

const PokemonEvolution = ({ pokedexAPI, id, children }) => {

    const [dataAPI, setDataAPI] = useState();

    useEffect(() => {
        if (id !== '') {
            const pathAPI = `/api/v2/pokemon-species/${id}/`
            pokedexAPI.getResource(pathAPI, (response, error) => {
                if (!error) {
                    pokedexAPI.getEvolutionChainById(getIdByUrl(response.evolution_chain.url), (response2, error2) => {
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
    }, [pokedexAPI, id]);

    return (
        <EvolutionsContainer>
            {children}
            {
                dataAPI && (
                    ((dataAPI.chain.evolves_to).length !== 0 )
                    ? <RecursiveEvolution 
                        id={getIdByUrl(dataAPI.chain.species.url)} 
                        name={dataAPI.chain.species.name} 
                        evolves_to={dataAPI.chain.evolves_to}
                        original={id}
                    />
                    : <NotEvolvesText>This Pokémon does not evolve.</NotEvolvesText>
                )
            }
        </EvolutionsContainer>
    )
}

export default PokemonEvolution;