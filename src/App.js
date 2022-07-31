import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import PokeData from './pages/PokeData';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Route path='/pokemon/:nameORid' component={PokeData}/>
    </BrowserRouter>
  );
}

export default App;
