// pokemon-data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  capturedPokemon: any;
  randomPokemon: any;

  constructor() { }
}


