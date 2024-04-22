
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from './Components/NavBar';
import Home from './View/Home';
import PokemonList from './View/PokemonList';
import PokemonDetail from './View/PokemonDetail';

function App() {
 
  return (
    <> 
      <Router>
        <NavBar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<PokemonList />} />
          <Route path="/personajes/:id" element={<PokemonDetail />} />
        </Routes>
      </Router>
 
    </>
  );
}

export default App;
