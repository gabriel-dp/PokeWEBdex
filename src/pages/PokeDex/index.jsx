import PokemonCard from '../../components/PokemonCard';

import {
    DisplayCards
} from './styles';

const PokeDex = () => {
    return (
        <DisplayCards>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
        </DisplayCards>
    )
}

export default PokeDex;