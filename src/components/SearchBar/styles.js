import styled from 'styled-components';

export const SearchContainer = styled.div`
    width: 100%;
    max-width: 55rem;
    border-radius: 0.5rem;
    overflow: hidden;
`;

export const SearchInput = styled.input.attrs({
    type:'text'
})`
    width: 100%;
    height: 2.5rem;
    background-color: #f5f5f5;
    border: none;
    padding: 0 1rem;
    font-size: 1rem;

    ::placeholder {
        color: #000;
        opacity: 0.15;
    }
    ::-ms-input-placeholder {
        color: #000;
        opacity: 0.15;
    }
`;