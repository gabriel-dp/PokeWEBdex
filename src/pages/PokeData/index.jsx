import { useEffect, useState } from 'react';
import TypeCard from '../../components/TypeCard';
import typeColors from '../../utils/TypeColors';
import {
    DataScreen,
    DataContainer,
    PokemonImage,
    Name,
    TypesContainer,
    DataTitle,
    DataText,
    AbilitiesContainer,
    MeasuresContainer,
    VerticalLine
} from './styles';

const PokeData = () => {

    const [dataAPI, setDataAPI] = useState({});
    useEffect(() => {
        async function fetchAsync (url) {
            return await (await fetch(url)).json();
        }
        fetchAsync(`https://pokeapi.co/api/v2/pokemon/lucario`).then(response => {
            setDataAPI(response);
        });
    }, [setDataAPI]);
    
    const [pokeData, setPokeData] = useState({
        'name': '',
        'id': 0,
        'types': [],
        'abilities': {
            'normal': [],
            'hidden': []
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
        },
        'sprite': ''
    });

    useEffect(() => {
        let newData = {...pokeData};
        if (Object.keys(dataAPI).length !== 0) {
            newData.name = dataAPI.name;
            newData.id = ('000' + dataAPI.id).substr(-3);
            newData.types = [];
            for (let i = 0; i < dataAPI.types.length; i++) {
                newData.types.push(dataAPI.types[i].type.name);
            }
            newData.abilities.normal = [];
            newData.abilities.hidden = [];
            for (let i = 0; i < dataAPI.abilities.length; i++) {
                let ability = dataAPI.abilities[i].ability.name;
                let category = dataAPI.abilities[i].is_hidden ? 'hidden' : 'normal';
                newData.abilities[category].push(ability);
            }
            newData.weight = dataAPI.weight/10;
            newData.height = dataAPI.height/10;
            Object.keys(newData.stats).forEach((stat, index) => {
                newData.stats[stat] = dataAPI.stats[index].base_stat;
            })
            newData.sprite = `https://www.serebii.net/pokemon/art/${newData.id}.png`
           setPokeData(newData);
           console.log(newData)
        }
    }, [dataAPI]);

    return (
        <DataScreen 
            colorLeft={typeColors[pokeData.types[0]]} 
            colorRight={typeof typeColors[pokeData.types[1]] !== 'undefined' ? typeColors[pokeData.types[1]] : typeColors[pokeData.types[0]]}
        >
            <DataContainer>
                <Name>{pokeData.name}</Name>
                <TypesContainer>
                    {
                        pokeData.types.map((index) => (
                            <TypeCard 
                                key={index}
                                type={index}
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
                            <DataText key={ability}>{ability} (hidden)</DataText>
                        ))
                    }
                </AbilitiesContainer>
                <MeasuresContainer>
                    <div className='weigth'>
                        <DataTitle>Weight</DataTitle>
                        <DataText>{pokeData.weight}kg</DataText>
                    </div>
                    <VerticalLine></VerticalLine>
                    <div className='height'>
                        <DataTitle>Height</DataTitle>
                        <DataText>{pokeData.height}m</DataText>
                    </div>
                </MeasuresContainer>
            </DataContainer>
            <PokemonImage>
                <img src={pokeData.sprite}/>
            </PokemonImage>
        </DataScreen>
    )
};

export default PokeData;