import styled from 'styled-components';
import { TbPokeball } from 'react-icons/tb';

export const BarContainer = styled.div`
    height: 2.25rem;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 2;
    background: linear-gradient(135deg, ${props => (props.colors[0] + ',' + props.colors[1])});
    filter: drop-shadow(0 0 0.5rem #222222aa);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const IconsContainer = styled.div`
    width: 100%;
    max-width: 50rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`;

export const PokeballIcon = styled(TbPokeball)`
    color: #fff;
    font-size: 1.4rem;
    transition: all 0.5s ease-in-out;

    :hover {
        transform: rotate(360deg);
    }
`;