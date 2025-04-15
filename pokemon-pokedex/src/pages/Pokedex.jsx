import { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';
import { fetchPokemonList } from '../services/api';

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const limit = 20;

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      try {
        const data = await fetchPokemonList(currentPage * limit, limit);
        setPokemonList(data.results);
        setTotalCount(data.count);
      } catch (error) {
        console.error('Failed to load Pokemon list', error);
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, [currentPage]);

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => prev + 1);
  };

  if (loading) return <div className="loading">Loading Pokémon...</div>;

  return (
    <div className="pokedex-page">
      <h1>Pokédex</h1>
      
      <Pagination 
        onPrevious={handlePrevious}
        onNext={handleNext}
        previousDisabled={currentPage === 0}
        nextDisabled={(currentPage + 1) * limit >= totalCount}
      />
      
      <div className="pokemon-grid">
        {pokemonList.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      
      <Pagination 
        onPrevious={handlePrevious}
        onNext={handleNext}
        previousDisabled={currentPage === 0}
        nextDisabled={(currentPage + 1) * limit >= totalCount}
      />
    </div>
  );
}

export default Pokedex;