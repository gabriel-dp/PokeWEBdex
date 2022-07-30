import styled from 'styled-components';

export const PokeImage = styled.img`
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 0 0.15rem #ffffff77)
`;

const PokemonImage = ({ id }) => {
    let fixedID = ('000'+id).slice(-3);
    let renderComponent = (id)
        ? <PokeImage src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${fixedID}.png`}/> 
        : <></>

    return (
        <>
            {renderComponent}
        </>
    )
}

export default PokemonImage;