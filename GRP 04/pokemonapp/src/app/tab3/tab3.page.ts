import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Tab1Page } from '../tab1/tab1.page';
import { SonhoService } from '../services/sonho.service';
import { PokeApiService } from '../services/poke-api.service';

interface procurarPokemon {
  name: string;
  abilities: any[];
  sprites: {
      front_default: string;
  };
  height: number;
  weight: number;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  BuscaPokemon: procurarPokemon = {
    name: '',
    abilities: [],
    sprites: {
        front_default: ''
    },
    height: 0,
    weight: 0,
};
  

  constructor(
    private pokeApiService : PokeApiService,
    public photoService: PhotoService,   
  ) 
  {
    {
      this.encontrarPokemons(); 
  }
  }
  encontrarPokemons() {
    this.pokeApiService.getPokeApiService()
        .subscribe((value: any) => {
            this.BuscaPokemon.name = value.name;
            this.BuscaPokemon.sprites = value.sprites;
            this.BuscaPokemon.abilities = value.abilities.map((ability: any) => ability.ability.name);
            this.BuscaPokemon.height = value.height;
            this.BuscaPokemon.weight = value.weight;
        });
}

}
