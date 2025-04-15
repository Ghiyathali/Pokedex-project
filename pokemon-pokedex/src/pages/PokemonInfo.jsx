import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PokemonDetail from '../components/PokemonDetail';
import { fetchPokemonDetails } from '../services/api';

function PokemonInfo() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPokemonDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchPokemonDetails(id);
        setPokemon(data);
      } catch (error) {
        console.error('Failed to load Pokemon details', error);
        setError('Failed to load Pokémon details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPokemonDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading Pokémon details...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="pokemon-info-page">
      <Link to="/" className="back-link">← Back to Pokédex</Link>
      <PokemonDetail pokemon={pokemon} />
    </div>
  );
}

export default PokemonInfo;