import TypeCard from '../../components/TypeCard';
import {
    DataScreen,
    DataContainer,
    OverflowContainer,
    PokemonImage,
    Name,
    TypesContainer,
    DataTitle,
    DataText,
    AbilitiesContainer,
    MeasuresContainer,
    VerticalLine
} from './styles';

const PokeData = () => {
    return (
        <DataScreen colorLeft='#ff0000' colorRight='#5555ff'>
            <DataContainer>
                <Name>Charizard</Name>
                <TypesContainer>
                    <TypeCard title='Fire' color='#ff0000'/>
                    <TypeCard title='Flying' color='#5555ff'/>
                </TypesContainer>
                <AbilitiesContainer>
                    <DataTitle>Abilities</DataTitle>
                    <DataText>Blaze, Levitate (hidden)</DataText>
                </AbilitiesContainer>
                <MeasuresContainer>
                    <div className='weigth'>
                        <DataTitle>Weight</DataTitle>
                        <DataText>150kg | 300lbs</DataText>
                    </div>
                    <VerticalLine></VerticalLine>
                    <div className='height'>
                        <DataTitle>Heigth</DataTitle>
                        <DataText>1.95m | 7"1'</DataText>
                    </div>
                </MeasuresContainer>

            </DataContainer>
            <PokemonImage>
                <img src='https://www.serebii.net/swordshield/pokemon/006.png'/>
            </PokemonImage>
        </DataScreen>
    )
};

export default PokeData;