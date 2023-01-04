import styled from 'styled-components';

export const PokedexScreen = styled.div`
	width: 100%;
	min-height: 100vh;
	height: 100%;
	background-color: #ddd;

	display: flex;
	flex-direction: column-reverse;
	align-items: center;
`;

export const PokedexWrapper = styled.div`
	width: 100%;
	height: calc(100vh - 2rem);
	padding: 2rem;
	overflow-y: scroll;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
`;

export const CardsContainer = styled.div`
	width: 100%;
	max-width: 55rem;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
	gap: 1rem;
`;
