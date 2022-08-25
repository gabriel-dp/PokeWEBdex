import {
    ButtonsContainer,
    NavButton
} from './styles';

const PageNavigator = ({ goToPreviousPage, goToNextPage, disablePrevious, disableNext }) => {
    return (
        <>
            {
                (!disablePrevious || !disableNext) && (
                    <ButtonsContainer>
                        <NavButton 
                            className='previous'
                            onClick={() => !disablePrevious ? goToPreviousPage() : {}}
                            isDisabled={disablePrevious}
                        >
                            <span>{'< '}Previous</span>
                        </NavButton>
                        <NavButton 
                            className='next'
                            onClick={() => !disableNext ? goToNextPage() : {}}
                            isDisabled={disableNext}
                        >
                            <span>Next{' >'}</span>
                        </NavButton>
                    </ButtonsContainer>
                )
            }
        </>
    )
}

export default PageNavigator;