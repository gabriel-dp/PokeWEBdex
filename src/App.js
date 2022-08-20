import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import PokeData from './pages/PokeData';
import PokeDex from './pages/PokeDex';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle/>
      <Route path='/' exact component={PokeDex}/>
      <Route path='/pokemon/:nameORid' component={PokeData}/>
    </BrowserRouter>
  );
}

export default App;
