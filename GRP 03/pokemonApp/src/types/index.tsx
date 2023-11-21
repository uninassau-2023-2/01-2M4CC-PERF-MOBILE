import { PokemonAbility, PokemonSprites } from "pokenode-ts";

export type TCep = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export type TPoke = {
  id: number;
  name: string;
  weight: number;
  height: number;
  abilities: number;
  sprites: PokemonSprites;
};
