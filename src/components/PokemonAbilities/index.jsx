import { useEffect, useState } from 'react';

import {
    AbilitiesContainer,
    UniqueAbilityContainer,
    AbilityName,
    DataHover
} from './styles';

const PokemonAbilities = ({ pokedexAPI, abilities, children }) => {

    const [abilitiesData, setAbilitiesData] = useState([]);
    useEffect(() => {
        pokedexAPI.getAbilityByName(abilities.map(ability => ability.name), (response, error) => {
            if(!error) {
                let tempData = abilities;
                tempData.forEach((ability, index) => {
                    let englishText = ((response[index].flavor_text_entries).map(text => text.language.name)).indexOf('en');
                    ability.description = response[index].flavor_text_entries[englishText].flavor_text;
                })
                setAbilitiesData(tempData);
            } else {
                console.log(error);
            }
        });
    }, [pokedexAPI, abilities]);

    return (
        <AbilitiesContainer>
            { children }
            {
                abilitiesData.map((ability) => (
                    <UniqueAbilityContainer key={ability.name}>
                        <AbilityName>
                            {ability.name + ((ability.is_hidden) ? ' (hidden)' : '')}
                        </AbilityName>
                        <DataHover>
                            <p>{ability.description}</p>
                        </DataHover>
                    </UniqueAbilityContainer>
                ))
            }
        </AbilitiesContainer>
    )
}

export default PokemonAbilities