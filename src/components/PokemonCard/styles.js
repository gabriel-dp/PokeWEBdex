import styled from 'styled-components';

export const CardContainer = styled.div`
    height: 12rem;
    width: 100%;
    padding: 0 1rem;
    max-width: 25rem;
    background-color: #c5c5c5;
    border-radius: 0.75rem;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    display: flex;
    flex-direction: column;
    position: relative;
    
    :hover {
        filter: drop-shadow(0 0 0.35rem #00000055);
        @media (min-width: 688px) {
            background: linear-gradient(135deg, #cc1100, #8b0000);

            p {
                color: #fff;
            }
        }
    }

    a {
        width: 100%;
        height: 100%;
        text-decoration: none;
    }
`;

export const ImageContainer = styled.div`
    height: 80%;
    width: 100%;
    padding: 1rem 0;

    display: flex;
    justify-content: center;
`;

export const DataContainer = styled.div`
    width: 100%;
    height: 20%;

    display: flex;
    justify-content: center;
`;

export const PokemonName = styled.p`
    font-size: 0.85rem;
    color: #222;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
`;