import GlobalStyle from './styles/global';
import Pokedex from 'pokedex-promise-v2';
import PokeData from './pages/PokeData';

function App() {
  const PokeAPI = new Pokedex();
  return (
    <>
      <GlobalStyle/>
      <PokeData pokedex={PokeAPI} name='tyranitar'/>
    </>
  );
}

export default App;
