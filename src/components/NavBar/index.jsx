import { Link } from 'react-router-dom';
import {
    BarContainer,
    IconsContainer,
    PokeballIcon
} from './styles';

const NavBar = ({ colors=['#cc1100', '#8b0000'] }) => {
    return (
        <BarContainer colors={colors}>
            <IconsContainer>
                <Link to={'../pokedex'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
                    <PokeballIcon/>
                </Link>
            </IconsContainer>
        </BarContainer>
    );
}

export default NavBar;