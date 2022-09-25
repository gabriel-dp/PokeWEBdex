import styled from 'styled-components';

export const PokeImage = styled.img`
	height: 100%;
	object-fit: contain;
	filter: drop-shadow(0 0 0.15rem #ffffff77);
`;

function PokemonImage({ id }) {
	const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;

	if (id) {
		return <PokeImage src={imageUrl} />;
	}
}

export default PokemonImage;
