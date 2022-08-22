import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    width: 100%;
    max-width: 15rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    gap: 2px;
`;

export const NavButton = styled.button`
    width: 50%;
    height: 100%;
    border-radius: 0;
    border: none;
    user-select: none;
    
    &.previous, &.next {
        background-color: ${props => props.isDisabled ? 'transparent' : '#c5c5c5'};
        cursor: ${props => !props.isDisabled ? 'pointer' : 'normal'};
        color: ${props => !props.isDisabled ? '#333' : 'transparent'};
        ${props => !props.isDisabled ? ':hover { background: linear-gradient(135deg, #cc1100, #8b0000); color: #fff; }' : ''};
    }
`;