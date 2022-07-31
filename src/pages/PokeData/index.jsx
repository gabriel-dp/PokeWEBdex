import { useEffect, useState } from 'react';
import { LightenDarkenColor } from 'lighten-darken-color'; 

import TypeCard from '../../components/TypeCard';
import PokemonImage from '../../components/PokemonImage';
import PokemonAbilities from '../../components/PokemonAbilities';
import PokemonStats from '../../components/PokemonStats';
import PokemonEvolution from '../../components/PokemonEvolution';
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
    MeasuresContainer,
    VerticalLine,
    HorizontalLine
} from './styles';

const PokeData = ({ pokedex, name }) => {

    const [dataAPI, setDataAPI] = useState({});
    
    useEffect(() => {
        pokedex.getPokemonByName(name, (response, error) => {
            if(!error) {
                setDataAPI(response);
            } else {
                console.log(error)
            }
        });
    }, [pokedex, name]);

    const [pokeData, setPokeData] = useState({
        'id': 0,
        'name': '',
        'types': [],
        'abilities': [],
        'weight': 0,
        'height': 0,
        'stats': [
            {
                'name': 'hp',
                'value': 0
            },
            {
                'name': 'atk',
                'value': 0
            },
            {
                'name': 'def',
                'value': 0
            },
            {
                'name': 'satk',
                'value': 0
            },
            {
                'name': 'sdef',
                'value': 0
            },
            {
                'name': 'spe',
                'value': 0
            },
        ]
    });
    
    useEffect(() => {
        if (Object.keys(dataAPI).length !== 0) {
            let tempData = {...pokeData};
            tempData.id = dataAPI.id;
            tempData.name = dataAPI.name;
            
            tempData.types = [];
            let firstType = dataAPI.types[0].type.name;
            let lastType = dataAPI.types[dataAPI.types.length-1].type.name;
            tempData.types[0] = firstType;
            if (firstType !== lastType) tempData.types[1] = lastType;

            tempData.abilities = [];
            dataAPI.abilities.forEach((ability, index) => {
                let object = {
                    'name': dataAPI.abilities[index].ability.name,
                    'description': '',
                    'is_hidden': dataAPI.abilities[index].is_hidden
                }
                tempData.abilities.push(object);
            });

            tempData.weight = dataAPI.weight;
            tempData.height = dataAPI.height;

            dataAPI.stats.forEach((stat, index) => {
                tempData.stats[index].value = dataAPI.stats[index].base_stat;
            })

            setPokeData(tempData);
        }
    }, [dataAPI]);

    return (
        <DataScreen 
            colorLeft={typeColors[pokeData.types[0]]} 
            colorRight={LightenDarkenColor(typeColors[pokeData.types[pokeData.types.length-1]], -30)}
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
                        <HorizontalLine/>
                        <PokemonAbilities pokedex={pokedex} abilities={pokeData.abilities}>
                            <DataTitle>Abilities</DataTitle>
                        </PokemonAbilities>
                        <HorizontalLine/>
                        <PokemonStats stats={pokeData.stats}>
                            <DataTitle className='title'>Stats</DataTitle>
                        </PokemonStats>
                        <HorizontalLine/>
                        <PokemonEvolution pokedex={pokedex} name={pokeData.name}>
                            <DataTitle className='title'>Evolution Chain</DataTitle>
                        </PokemonEvolution>
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