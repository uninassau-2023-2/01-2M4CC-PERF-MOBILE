import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataStorage {
  public pokemonList: any = [];
  public pokemonData1: any = [];
  public pokemonData2: any = [];
}
