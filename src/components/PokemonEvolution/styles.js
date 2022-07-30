import styled from 'styled-components';
import { BsArrow90DegDown } from 'react-icons/bs';

export const EvolutionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PokemonContainer = styled.div`
    width: 100%;
    padding-left: calc(1.5rem*${props => props.stage});

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ImageContainer = styled.div`
    height: 100%;
    max-height: 3rem;
    aspect-ratio: 1;
    
    filter: drop-shadow(0 0 0.25rem ${props => props.is_original ? '#777' : '#aaa'});
`;

export const Arrow = styled(BsArrow90DegDown)`
    font-size: 1.5rem;
    font-weight: bolder;
    color: #666;
    margin-right: 1rem;
    margin-left: ${props => (props.stage > 1) ? '2' : '0'}rem;
    transform: rotate(-90deg) translate(0.5rem, 0);
`;

export const PokemonName = styled.p`
    text-transform: capitalize;
    font-size: 1rem;
    color: #444;
    margin-left: 0.75rem;

    font-weight: ${props => props.is_original ? 'bold' : 'auto'};
`;