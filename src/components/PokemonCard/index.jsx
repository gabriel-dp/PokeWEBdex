import { Link } from 'react-router-dom';
import typeColors from '../../utils/TypeColors';
import PokemonImage from '../PokemonImage';

import {
    CardContainer, 
    ImageContainer, 
    DataContainer, 
    PokemonName
} from './styles';

const PokemonCard = ({ id, name, types }) => {
    return (
        <CardContainer color1={typeColors[types[0]]} color2={typeColors[types[types.length-1]]}>
            <Link to={`pokemon/${name}`}>
                <ImageContainer>
                    <PokemonImage id={id}/>
                </ImageContainer>
                <DataContainer>
                    <PokemonName>{name}</PokemonName>
                </DataContainer>
            </Link>
        </CardContainer>
    )
}

export default PokemonCard;