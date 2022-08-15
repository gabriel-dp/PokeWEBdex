import styled from 'styled-components';

export const PokedexScreen = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #ddd;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardsContainer = styled.div`
    width: 100%;
    max-width: 60rem;
    padding: 1rem 2rem;
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    gap: 1rem;
`;