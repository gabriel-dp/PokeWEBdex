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
    user-select: none;
   text-shadow: -1px -1px 0 #00000033, 1px -1px 0 #00000033, -1px 1px 0 #00000033, 1px 1px 0 #00000033;
`;


const TypeCard = ({ type }) => {  
    return (
        <Card color={typeColors[type]}>
            <TypeTitle>{type}</TypeTitle>
        </Card>
    );
};

export default TypeCard;