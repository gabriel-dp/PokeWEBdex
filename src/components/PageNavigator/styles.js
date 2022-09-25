import styled from 'styled-components';

export const ButtonsContainer = styled.div`
	width: 100%;
	max-width: 15rem;
	height: 2.25rem;
	border-radius: 0.5rem;
	overflow: hidden;

	display: flex;
	flex-direction: row;
	gap: 2px;
`;

export const NavButton = styled.button`
	width: 50%;
	height: 100%;
	background-color: #c5c5c5;
	border-radius: 0;
	border: none;
	user-select: none;
	-webkit-tap-highlight-color: transparent;

	opacity: ${(props) => (props.isDisabled ? 0.4 : 1)};
	cursor: ${(props) => (!props.isDisabled ? 'pointer' : 'not-allowed')};
	color: ${(props) => (!props.isDisabled ? '#333333' : '#33333377')};

	@media (min-width: 688px) {
		${(props) =>
			!props.isDisabled ? ':hover { background: linear-gradient(135deg, #cc1100, #8b0000); color: #fff; }' : ''};
	}
`;
