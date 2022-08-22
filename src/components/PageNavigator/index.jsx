import {
    ButtonsContainer,
    NavButton
} from './styles';

const PageNavigator = ({ handlePreviousPage, handleNextPage, disablePrevious, disableNext }) => {
    return (
        <ButtonsContainer>
            <NavButton 
                className='previous'
                onClick={() => !disablePrevious ? handlePreviousPage() : {}}
                isDisabled={disablePrevious}
            >
                <span>{'< '}Previous</span>
            </NavButton>
            <NavButton 
                className='next'
                onClick={() => !disableNext ? handleNextPage() : {}}
                isDisabled={disableNext}
            >
                <span>Next{' >'}</span>
            </NavButton>
        </ButtonsContainer>
    )
}

export default PageNavigator;