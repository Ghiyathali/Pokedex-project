import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (offset = 0, limit = 20) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
};

export const fetchPokemonDetails = async (pokemonId) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${pokemonId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
    throw error;
  }
};