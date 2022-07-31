import styled from 'styled-components';

export const AbilitiesContainer = styled.div`
    width: 100%;
    user-select: none;

    display: flex;
    flex-direction: column;
    gap: 0.15rem;
`;

export const UniqueAbilityContainer = styled.div`
    width: 100%;
    position: relative;

    :hover {
        .data-hover {
            opacity: 1;
        }
    }
`;

export const AbilityName = styled.p`
    font-size: 0.875rem;
    color: #555555;
    text-align: center;
    text-transform: capitalize;
`;

export const DataHover = styled.div.attrs({
    className: 'data-hover'
})`
    height: 1.35rem;
    width: 125%;
    overflow: scroll;
    
    opacity: 0;
    transition: all 0.25s ease;
    background-color: #333;
    padding: 0.2rem 1rem;
    border-radius: 0.3rem;
    z-index: 1;

    position: absolute;
    left: 50%;
    transform: translate(-50%, -100%);

    p {
        color: #fff;
        font-size: 0.75rem;
        text-align: center;
    }
`;