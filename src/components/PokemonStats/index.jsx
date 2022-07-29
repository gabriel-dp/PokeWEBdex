import styled from 'styled-components';

export const StatsContainer = styled.div`
    width: 100%;
    //background-color: blue;

    display: flex;
    flex-direction: column;
`;

export const UniqueStatContainer = styled.div`
    width: 100%;    
    display: grid;
    grid-template-columns: 2fr 10fr;
    align-items: center;
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

const PokemonStats = ({ stats, children }) => {
    return(
        <StatsContainer>
            { children }
            {
                Object.keys(stats).map((stat) => (
                    <UniqueStatContainer key={stat}>
                        <StatCategory>
                            <h5>{stat}</h5>
                        </StatCategory>
                        <StatBar>
                            <StatFill percentage={stat === 'hp' ? stats['hp']*100/255 : stats[stat]*100/180}/>
                        </StatBar>
                    </UniqueStatContainer>
                ))
            }
        </StatsContainer>
    );
}

export default PokemonStats;