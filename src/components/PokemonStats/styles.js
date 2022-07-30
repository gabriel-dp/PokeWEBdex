import styled from 'styled-components';

export const StatsContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    user-select: none;
`;

export const UniqueStatContainer = styled.div`
    width: 100%;    
    display: grid;
    grid-template-columns: 2fr 10fr 1.4fr;
    align-items: center;
    //background-color: red;
`;

export const StatCategory = styled.div`
    width: 3rem;

    h5 {
        font-size: 1rem;
        font-weight: bold;
        color: #555;
        text-transform: uppercase;
    }
`;

export const StatBar = styled.div`
    width: 100%;
    height: 0.75rem;
    border-radius: 0.5rem;
    background-color: #aaa;
    overflow: hidden;
`;

export const StatFill = styled.div`
    width: ${props => props.percentage}%;
    background-color: #555;
    height: 100%
`;

export const StatValue = styled.div`
    width: 1.5rem;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;

    span {
        font-size: 0.7rem;
        color: #555;
    }
`;