import styled from 'styled-components';

export const PokedexScreen = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #ddd;

    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 2rem;
    padding: 2rem
`;

export const CardsContainer = styled.div`
    width: 100%;
    max-width: 55rem;
    padding: 1.5rem 1rem;
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1rem;
`;