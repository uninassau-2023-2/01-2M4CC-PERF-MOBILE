import axios from 'axios';
import { PokemonClient } from 'pokenode-ts';

export async function fetchCep(cep: string) {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return response.data;
}

export async function fetchRandomPokemon() {
  const api = new PokemonClient();
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const data = await api.getPokemonById(randomNumber);
  return data;
}
