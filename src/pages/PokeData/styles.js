import styled from 'styled-components';

export const DataScreen = styled.div`
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(110deg, ${props => (props.colors[0] + ',' + props.colors[1])});
    overflow: hidden;

    display: flex;
    flex-direction: column-reverse;
`;

export const BackgroundDataContainer = styled.div`
    height: 70%;
    width: 100%;
    border-radius: 2rem 2rem 0 0;
    background-image: linear-gradient(to bottom, #f5f5f5, #dddddd);
    filter: drop-shadow(0 1rem 1rem #333);
    overflow: hidden;
    z-index: ${props => props.isLoading ? '-1' : '1'};
    
    ::before {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 3.5rem;
        background: linear-gradient(#f5f5f5 45%, transparent);
        z-index: 2;
    }
`;

export const DataWrapper = styled.div`  
    width: 100%;  
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 3rem 2rem 2rem 2rem;
    margin-bottom: 5rem; 
    
    display: flex;
    flex-direction: column;
    align-items: center;

    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const DataContainer = styled.div`
    width: 100%;
    max-width: 15rem;
    gap: 1.25rem;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageContainer = styled.div`
    height: 40%;
    max-height: 14rem;
    min-height: 7rem;
    transform: translate(0, 20%);
    padding: 0 1rem;
    z-index: 1;
    
    display: flex;
    flex-direction: column;
`;

export const NameText = styled.h2`
    font-size: 1.5rem;
    color: #333;
    text-transform: uppercase;
`;

export const TypesContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
`;

export const DataTitle = styled.h3`
    font-size: 1.125rem;
    color: #444444;
    text-align: center;
    margin-bottom: 0.25rem;
`;

export const DataText = styled.p`
    font-size: 0.875rem;
    color: #555555;
    text-align: center;
    text-transform: capitalize;
`;

export const MeasuresContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

    div:not(.vl){
        min-width: 30%;
        display: flex;
        flex-direction: column;
    }

    .weigth {
        align-items: flex-end;
    }
    .height  {
        align-items: flex-start;
    }

`;

export const VerticalLine = styled.div.attrs({
    className: 'vl'
})`
    height: 100%;
    border-left: 2px #aaaaaa solid;
`;

export const HorizontalLine = styled.hr`
    width: 125%;
    border: none;
    border-top: 1px #aaa     solid;
`;