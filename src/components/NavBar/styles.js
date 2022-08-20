import styled from 'styled-components';
import { TbPokeball } from 'react-icons/tb';

export const BarContainer = styled.div`
    height: 2.5rem;
    width: 100%;
    position: fixed;
    z-index: 1;
    background: linear-gradient(135deg, #cc1100, #8b0000);
    filter: drop-shadow(0 0 0.5rem #8b0000cc);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const PokeballIcon = styled(TbPokeball)`
    color: #fff;
    font-size: 1.5rem;
    transition: all 0.5s ease-in-out;

    :hover {
        transform: rotate(360deg);
    }
`;