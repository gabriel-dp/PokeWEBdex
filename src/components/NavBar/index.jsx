import { Link } from 'react-router-dom';
import {
    BarContainer,
    IconsContainer,
    PokeballIcon
} from './styles';

const NavBar = ({ colors=['#cc1100', '#8b0000'], setPage, setSearch }) => {
    const handleIconClick = () => {
        setPage && setPage(0); //go to initial page
        setSearch && setSearch('') //reset search bar
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }

    return (
        <BarContainer colors={colors}>
            <IconsContainer>
                <Link to={'../'} onClick={() => handleIconClick()}>
                    <PokeballIcon/>
                </Link>
            </IconsContainer>
        </BarContainer>
    );
}

export default NavBar;