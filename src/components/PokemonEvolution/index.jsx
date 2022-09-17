import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getIdByUrl, fixedId } from '../../utils/IdManage';
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

    const is_original = (original === id);
    return (
        <>
            <PokemonContainer stage={stage}>
                {
                    stage > 0 ? <Arrow stage={stage}/> : ''
                }
                <Link to={`${id}`} replace>
                    <ImageContainer is_original={is_original}>
                        <PokemonImage id={id}/>
                    </ImageContainer>
                </Link>
                <Link to={`${id}`} replace>
                    <PokemonName is_original={is_original}>{name}</PokemonName>
                </Link>
            </PokemonContainer>
            { 
                evolves_to && evolves_to.map((evolution) => (
                    <RecursiveEvolution 
                    key={getIdByUrl(evolution.species.url)}
                    id={fixedId(getIdByUrl(evolution.species.url))}
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

const EXCLUDED_FORMS = ['totem', 'gmax', 'hisui', 'white-striped', 'busted', 'pikachu-']; 
/* 
(totem for alola big variations) 
(gmax for gigantamax versions) 
(hisui for gen8 variants) 
(white for basculin) 
(busted for mimikyu)
(pikachu for random pikachu forms)
*/

function checkExcluded (form) {
    let is_excluded = false;
    EXCLUDED_FORMS.forEach((subname) => {
        if (form.pokemon.name.includes(subname)) is_excluded = true;
    })
    if (!is_excluded) return form.pokemon.name;
}

const PokemonEvolution = ({ pokedexAPI, id, form_id, children }) => {

    const [dataAPI, setDataAPI] = useState();
    const [pokeForms, setPokeForms] = useState([]);

    useEffect(() => {
        if (id !== '') {
            const pathAPI = `/api/v2/pokemon-species/${parseInt(id)}/`
            pokedexAPI.getResource(pathAPI, (response, error) => {
                if (!error) {
                    setPokeForms((response.varieties).filter(checkExcluded));

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
                        id={fixedId(getIdByUrl(dataAPI.chain.species.url))} 
                        name={dataAPI.chain.species.name} 
                        evolves_to={dataAPI.chain.evolves_to}
                        original={id}
                    />
                    : <NotEvolvesText>This Pokémon does not evolve.</NotEvolvesText>
                )
            }
            {
                dataAPI && (
                    pokeForms.map((form, index) => {
                        const pokemon_id = fixedId(getIdByUrl(form.pokemon.url));
                        const is_original = (pokemon_id === form_id);
                        const pokemon_link = (form.is_default) ? pokemon_id : form.pokemon.name;
                        return (
                            (!form.is_default || ((dataAPI.chain.evolves_to.length === 0) && pokeForms.length > 1)) && (
                                <PokemonContainer key={index}>
                                    <Link to={`${pokemon_link}`} replace>
                                        <ImageContainer is_original={is_original}>
                                            <PokemonImage id={index === 0 ? id : `${id}_f${index+1}`}/>
                                        </ImageContainer>
                                    </Link>
                                    <Link to={`${pokemon_link}`} replace>
                                        <PokemonName is_original={is_original}>{form.pokemon.name}</PokemonName>
                                    </Link>
                                </PokemonContainer>
                            )
                        )
                    })
                )
            }
        </EvolutionsContainer>
    )
}

export default PokemonEvolution;