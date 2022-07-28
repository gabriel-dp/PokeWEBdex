import styled from 'styled-components';

export const DataScreen = styled.div`
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(110deg, ${props => (props.colorLeft + ',' + props.colorRight)});
    position: relative;

    display: flex;
    flex-direction: column-reverse;
`;

export const DataContainer = styled.div`
    height: 70%;
    width: 100%;
    border-radius: 1.5rem 1.5rem 0 0;
    background-image: linear-gradient(to bottom, #f5f5f5, #dddddd);
    padding: 3rem;
    overflow: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    filter: drop-shadow(0 1rem 1rem #333);
`;

export const PokemonImage = styled.div`
    height: 40%;
    max-height: 12rem;
    min-height: 7rem;
    aspect-ratio: 2;
    //background-color: blue;

    transform: translate(0, 25%);
    z-index: 1;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    filter: drop-shadow(0 0 0.25rem #333333aa);

    img {
        height: 100%;
        object-fit: contain;
    }
`;

export const Name = styled.h2`
    font-size: 1.5rem;
    color: #333;
`;

export const TypesContainer = styled.div`
    width: 100%;
    margin-top: 1rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
`;

export const DataTitle = styled.h3`
    font-size: 1.125rem;
    color: #444444;
    text-align: center;
`;

export const DataText = styled.p`
    font-size: 0.875rem;
    color: #555555;
    text-align: center;
`;

export const AbilitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MeasuresContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

    div:not(.vl){
        min-width: 30%;
        display: flex;
        flex-direction: column;
    }

    .weigth {
        align-items: flex-end;
    }
    .height  {
        align-items: flex-start;
    }

`;

export const VerticalLine = styled.div.attrs({
    className: 'vl'
})`
    height: 100%;
    border-left: 2px #aaaaaa solid;
`;