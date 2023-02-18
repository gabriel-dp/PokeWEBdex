import { useState } from 'react';
import styled from 'styled-components';

export const PokeImage = styled.img`
	height: 100%;
	object-fit: contain;
	filter: drop-shadow(0 0 0.15rem #ffffff77);
	opacity: ${(props) => (props.loading === 'true' ? 0.01 : 1)};
	transition: opacity 0.25s ease-in-out;
`;

function PokemonImage({ id }) {
	const [loading, setLoading] = useState(true);

	const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;

	const handleLoad = () => {
		setLoading(false);
	};

	return (
		<PokeImage
			alt={id}
			src={imageUrl}
			onLoad={handleLoad}
			loading={loading.toString()}
		/>
	);
}

export default PokemonImage;
