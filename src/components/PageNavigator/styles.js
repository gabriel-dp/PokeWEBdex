import styled from 'styled-components';

export const ButtonsContainer = styled.div`
	width: 100%;
	max-width: 15rem;
	height: 2.25rem;
	border-radius: 0.5rem;

	display: flex;
	flex-direction: row;
	gap: 2px;
`;

export const NavButton = styled.button`
	width: 50%;
	height: 2.25rem;
	color: #333;
	background-color: #c5c5c5;
	border: none;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	transition: all 50ms ease;

	&.previous {
		border-radius: 1rem 0 0 1rem;
	}

	&.next {
		border-radius: 0 1rem 1rem 0;
	}

	opacity: ${(props) => (props.isDisabled ? 0.8 : 1)};
	background-color: ${(props) => (!props.isDisabled ? '#c5c5c5' : 'transparent')};
	cursor: ${(props) => (!props.isDisabled ? 'pointer' : 'not-allowed')};

	@media (min-width: 688px) {
		${(props) =>
			!props.isDisabled ? ':hover { background: linear-gradient(135deg, #cc1100, #8b0000); color: #fff; }' : ''};
	}
`;
