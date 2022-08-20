import { Link } from 'react-router-dom';
import {
    BarContainer,
    PokeballIcon
} from './styles';

const NavBar = () => {
    return (
        <BarContainer>
            <Link to={'pokedex'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
                <PokeballIcon/>
            </Link>
        </BarContainer>
    );
}

export default NavBar;