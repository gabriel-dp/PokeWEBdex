import typeColors from '../../utils/TypeColors';
import styled from 'styled-components';

export const Card = styled.div`
    background-color: ${props => props.color};
    width: 50%;
    height: 1.5rem;
    border-radius: 10rem;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TypeTitle = styled.p`
    color: white;
    font-size: 0.75rem;
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