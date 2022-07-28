import styled from 'styled-components';

export const Card = styled.div`
    background-color: ${props => props.color};
    width: 50%;
    max-width: 9rem;
    aspect-ratio: 5;
    border-radius: 10%/50%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TypeTitle = styled.p`
    color: white;
    font-weight: bold;
`;


const TypeCard = ({ title, color }) => {  
    return (
        <Card color={color}>
            <TypeTitle>{title}</TypeTitle>
        </Card>
    );
};

export default TypeCard;