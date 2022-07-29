import styled from 'styled-components';

export const PokeImage = styled.img`
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 0 0.15rem #ffffff77)
`;

const PokemonImage = ({ id }) => {
    return (
        <PokeImage src={`https://www.serebii.net/pokemon/art/${id}.png`}/>
    )
}

export default PokemonImage