import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Pokedex from 'pokedex-promise-v2';
import { LightenDarkenColor } from 'lighten-darken-color'; 

import NavBar from '../../components/NavBar';
import TypeCard from '../../components/TypeCard';
import PokemonImage from '../../components/PokemonImage';
import PokemonAbilities from '../../components/PokemonAbilities';
import PokemonStats from '../../components/PokemonStats';
import PokemonEvolution from '../../components/PokemonEvolution';

import typeColors from '../../utils/TypeColors';
import { fixedId } from '../../utils/IdManage';

import {
    DataScreen,
    BackgroundDataContainer,
    DataWrapper,
    DataContainer,
    ImageContainer,
    NameText,
    TypesContainer,
    DataTitle,
    DataText,
    MeasuresContainer,
    VerticalLine,
    HorizontalLine
} from './styles';

const PokeData = () => {

    const { nameORid } = useParams();
    const pokedexAPI = useMemo(() => new Pokedex(), []);

    const [dataAPI, setDataAPI] = useState({});
    useEffect(() => {
        let search = (/^\d+$/.test(nameORid)) ? parseInt(nameORid) : nameORid;
        pokedexAPI.getPokemonByName(search, (response, error) => {
            if(!error) {
                setDataAPI(response);
            } else {
                console.log(error)
            }
        });
    }, [pokedexAPI, nameORid]);

    const defaultData = useMemo(() => ({
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
    }), []);
    
    const [pokeData, setPokeData] = useState();
    const [colors, setColors] = useState(['#f5f5f5', '#ddd']);
    useEffect(() => {
        if (Object.keys(dataAPI).length !== 0) {
            let tempData = {...defaultData};
            tempData.id = fixedId(dataAPI.id);
            tempData.name = dataAPI.species.name;
            
            tempData.types = [];
            let firstType = dataAPI.types[0].type.name;
            let lastType = dataAPI.types[dataAPI.types.length-1].type.name;
            tempData.types[0] = firstType;
            if (firstType !== lastType) tempData.types[1] = lastType;

            setColors([typeColors[firstType], LightenDarkenColor(typeColors[lastType], -30)]);

            tempData.abilities = [];
            dataAPI.abilities.forEach((raw_ability) => {
                let object = {
                    'name': raw_ability.ability.name,
                    'description': '',
                    'is_hidden': raw_ability.is_hidden
                }
                tempData.abilities.push(object);
            });

            tempData.weight = dataAPI.weight;
            tempData.height = dataAPI.height;

            dataAPI.stats.forEach((stat, index) => {
                tempData.stats[index].value = stat.base_stat;
            })

            setPokeData(tempData);
        }
    }, [dataAPI, defaultData]);
    
    return (
        <DataScreen colors={colors}>
            <NavBar colors={colors}/>
            <BackgroundDataContainer isLoading={(Object.keys(dataAPI).length === 0)}>
                <DataWrapper>
                    {
                        pokeData && (
                            <DataContainer>
                                <div>
                                    <NameText>{pokeData.name}</NameText>
                                    <DataText>#{pokeData.id}</DataText>
                                </div>
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
                                <PokemonAbilities pokedexAPI={pokedexAPI} abilities={pokeData.abilities}>
                                    <DataTitle>Abilities</DataTitle>
                                </PokemonAbilities>
                                <HorizontalLine/>
                                <PokemonStats stats={pokeData.stats}>
                                    <DataTitle className='title'>Stats</DataTitle>
                                </PokemonStats>
                                <HorizontalLine/>
                                <PokemonEvolution pokedexAPI={pokedexAPI} id={pokeData.id}>
                                    <DataTitle className='title'>Evolution Chain</DataTitle>
                                </PokemonEvolution>
                            </DataContainer>
                        )
                    }
                </DataWrapper>
            </BackgroundDataContainer>
            {
                pokeData && (
                    <ImageContainer>
                        <PokemonImage id={pokeData.id}/>
                    </ImageContainer>
                )
            }
        </DataScreen>
    )
};

export default PokeData;