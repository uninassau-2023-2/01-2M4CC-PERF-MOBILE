import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  public pokemon1: any = {
    nome: '',
    sprites: '',
    habilidades: '',
    altura: '',
    peso: '',
  };

  public pokemon2: any = {
    nome: '',
    sprites: '',
    habilidades: '',
    altura: '',
    peso: '',
  };
}
