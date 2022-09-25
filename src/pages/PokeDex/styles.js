import styled from 'styled-components';

export const PokedexScreen = styled.div`
	width: 100%;
	min-height: 100vh;
	height: 100%;
	background-color: #ddd;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const PokedexWrapper = styled.div`
	width: 100%;
	max-width: 55rem;
	padding: 4rem 1rem 2rem 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
`;

export const CardsContainer = styled.div`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
	gap: 1rem;
`;
