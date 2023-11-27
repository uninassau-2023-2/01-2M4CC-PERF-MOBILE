import { Component } from '@angular/core';
import { PokemonDataStorage } from '../services/pokemon-data-storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public pokemonDataStorage: PokemonDataStorage) {}

  getPokemonList() {
    return this.pokemonDataStorage.pokemonList;
  }

  getPokemonImageUrl(pokemon: any) {
    const pokemonId = pokemon.id;
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
  }

}
