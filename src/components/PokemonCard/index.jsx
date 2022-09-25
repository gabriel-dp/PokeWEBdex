import { Link } from 'react-router-dom';
import PokemonImage from '../PokemonImage';

import { CardContainer, ImageContainer, DataContainer, PokemonName } from './styles';

function PokemonCard({ id, name }) {
	return (
		<CardContainer>
			<Link to={`pokemon/${id}`}>
				<ImageContainer>
					<PokemonImage id={id} />
				</ImageContainer>
				<DataContainer>
					<PokemonName>{name}</PokemonName>
				</DataContainer>
			</Link>
		</CardContainer>
	);
}

export default PokemonCard;
