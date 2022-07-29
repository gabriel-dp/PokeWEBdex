import { useEffect, useState } from 'react';
import Pokedex from 'pokedex-promise-v2';

import TypeCard from '../../components/TypeCard';
import PokemonImage from '../../components/PokemonImage';
import PokemonStats from '../../components/PokemonStats';
import typeColors from '../../utils/TypeColors';

import {
    DataScreen,
    BackgroundDataContainer,
    DataWrapper,
    DataContainer,
    ImageContainer,
    Name,
    TypesContainer,
    DataTitle,
    DataText,
    AbilitiesContainer,
    MeasuresContainer,
    VerticalLine
} from './styles';

const PokeData = ({ name }) => {

    const [dataAPI, setDataAPI] = useState({});
    
    useEffect(() => {
        const PokeAPI = new Pokedex();
        PokeAPI.getPokemonByName(name)
        .then((response) => {
                //console.log(response)
                setDataAPI(response);
            })
            .catch((error) => {
                console.log('There was an ERROR: ', error);
            });
    }, [name]);

    const [pokeData, setPokeData] = useState({
        'id': 0,
        'name': '',
        'types': [],
        'abilities': {
            'normal': [],
            'hidden': [],
        },
        'weight': 0,
        'height': 0,
        'stats': {
            'hp': 0,
            'atk': 0,
            'def': 0,
            'satk': 0,
            'sdef': 0,
            'spe': 0
        }
    });
    
    let tempData = {...pokeData};
    useEffect(() => {
        if (Object.keys(dataAPI).length !== 0) {
            tempData.id = dataAPI.id;
            tempData.name = dataAPI.name;

            let firstType = dataAPI.types[0].type.name;
            let secondType = dataAPI.types[dataAPI.types.length-1].type.name;
            tempData.types[0] = firstType;
            if (firstType !== secondType) tempData.types[1] = secondType;

            dataAPI.abilities.forEach((ability, index) => {
                let abia = dataAPI.abilities[index];
                (!abia.is_hidden) 
                ? tempData.abilities.normal.push(abia.ability.name)
                : tempData.abilities.hidden.push(abia.ability.name)
            });

            tempData.weight = dataAPI.weight;
            tempData.height = dataAPI.height;

            Object.keys(tempData.stats).forEach((stat, index) => {
                tempData.stats[stat] = dataAPI.stats[index].base_stat
            })

            setPokeData(tempData);
        }
    }, [dataAPI]);

    return (
        <DataScreen 
            colorLeft={typeColors[pokeData.types[0]]} 
            colorRight={typeColors[pokeData.types[0]]}
        >
            <BackgroundDataContainer>
                <DataWrapper>
                    <DataContainer>
                        <Name>{pokeData.name}</Name>
                        <TypesContainer>
                            {
                                pokeData.types.map((type, index) => (
                                    <TypeCard 
                                        key={index}
                                        type={type}
                                    />
                                ))
                            }
                        </TypesContainer>
                        <AbilitiesContainer>
                            <DataTitle>Abilities</DataTitle>
                            {
                                pokeData.abilities.normal.map((ability) => (
                                    <DataText key={ability}>{ability}</DataText>
                                ))
                            }
                            {
                                pokeData.abilities.hidden.map((ability) => (
                                    <DataText key={ability}>{`${ability} (hidden)`}</DataText>
                                ))
                            }
                        </AbilitiesContainer>
                        <MeasuresContainer>
                            <div className='weigth'>
                                <DataTitle>Weight</DataTitle>
                                <DataText>{(pokeData.weight)/10}kg</DataText>
                            </div>
                            <VerticalLine></VerticalLine>
                            <div className='height'>
                                <DataTitle>Height</DataTitle>
                                <DataText>{(pokeData.height)/10}m</DataText>
                            </div>
                        </MeasuresContainer>
                        <PokemonStats stats={pokeData.stats}>
                            <DataTitle className='title'>Stats</DataTitle>
                        </PokemonStats>
                    </DataContainer>
                </DataWrapper>
            </BackgroundDataContainer>
            <ImageContainer>
                <PokemonImage id={pokeData.id}/>
            </ImageContainer>
        </DataScreen>
    )
};

export default PokeData;