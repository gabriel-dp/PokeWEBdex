import { HashRouter, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import PokeData from './pages/PokeData';
import PokeDex from './pages/PokeDex';

function App() {
  return (
    <HashRouter>
      <GlobalStyle/>
      <Route path='/' exact component={PokeDex}/>
      <Route path='/pokemon/:nameORid' component={PokeData}/>
    </HashRouter>
  );
}

export default App;
