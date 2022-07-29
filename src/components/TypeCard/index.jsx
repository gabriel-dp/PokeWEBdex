import typeColors from '../../utils/TypeColors';
import styled from 'styled-components';

export const Card = styled.div`
    background-color: ${props => props.color};
    width: 50%;
    max-width: 8rem;
    aspect-ratio: 5;
    border-radius: 10%/50%;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TypeTitle = styled.p`
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    text-shadow: 1px 1px #00000055;
    user-select: none;
`;


const TypeCard = ({ type }) => {  
    return (
        <Card color={typeColors[type]}>
            <TypeTitle>{type}</TypeTitle>
        </Card>
    );
};

export default TypeCard;