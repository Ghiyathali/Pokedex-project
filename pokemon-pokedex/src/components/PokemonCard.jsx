import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PokemonCard({ pokemon }) {
  // State to store the fetched Pokemon data
  const [pokemonData, setPokemonData] = useState(null);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Function to fetch detailed Pokemon data
    const fetchData = async () => {
      setLoading(true);
      try {
        // The pokemon prop contains a URL to fetch details
        const response = await axios.get(pokemon.url);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    // Call the fetch function when component mounts or pokemon prop changes
    fetchData();
  }, [pokemon.url]);
  
  // Show loading state while fetching data
  if (loading) return <div className="pokemon-card loading">Loading...</div>;
  
  // If we have data, display the Pokemon card
  return (
    <Link to={`/pokemon/${pokemonData.id}`} className="pokemon-card">
      <div className="pokemon-card-inner">
        <img 
          src={pokemonData.sprites.front_default} 
          alt={pokemon.name} 
          className="pokemon-image"
        />
        <h3 className="pokemon-name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h3>
        <p className="pokemon-number">#{pokemonData.id.toString().padStart(3, '0')}</p>
      </div>
    </Link>
  );
}

export default PokemonCard;