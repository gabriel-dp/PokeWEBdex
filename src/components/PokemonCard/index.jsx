import { Link } from 'react-router-dom';
import typeColors from '../../utils/TypeColors';
import PokemonImage from '../PokemonImage';

import {
    CardContainer, 
    ImageContainer, 
    DataContainer, 
    PokemonName
} from './styles';

const PokemonCard = ({ id, name}) => {
    return (
        <CardContainer>
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