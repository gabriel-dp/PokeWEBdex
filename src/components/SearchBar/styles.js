import styled from 'styled-components';

export const SearchContainer = styled.div`
	width: 100%;
	max-width: 55rem;
`;

export const SearchInput = styled.input.attrs({
	type: 'text',
})`
	width: 100%;
	height: 2.5rem;
	background-color: #f5f5f5;
	border: none;
	border-radius: 0.5rem;
	padding: 0 1.25rem;
	font-size: 1rem;
	outline: none;
	user-select: auto;

	::placeholder {
		color: #000;
		opacity: 0.3;
	}
	::-ms-input-placeholder {
		color: #000;
		opacity: 0.3;
	}

	:focus {
		filter: drop-shadow(0 0 0.25rem #00000022);
	}
`;
