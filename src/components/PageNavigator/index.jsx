import { ButtonsContainer, NavButton } from './styles';

function PageNavigator({ goToPreviousPage, goToNextPage, disablePrevious, disableNext }) {
	if (!disablePrevious || !disableNext) {
		return (
			<ButtonsContainer>
				<NavButton
					className="previous"
					onClick={() => (!disablePrevious ? goToPreviousPage() : {})}
					isDisabled={disablePrevious}
				>
					<span>{'< '}Previous</span>
				</NavButton>
				<NavButton
					className="next"
					onClick={() => (!disableNext ? goToNextPage() : {})}
					isDisabled={disableNext}
				>
					<span>Next{' >'}</span>
				</NavButton>
			</ButtonsContainer>
		);
	}
}

export default PageNavigator;
