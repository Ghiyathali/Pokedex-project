import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pokedex from './pages/Pokedex';
import PokemonInfo from './pages/PokemonInfo';
import About from './pages/About';
import './App.css';

function App() {
  return (
    
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<PokemonInfo />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    
  );
}

export default App;