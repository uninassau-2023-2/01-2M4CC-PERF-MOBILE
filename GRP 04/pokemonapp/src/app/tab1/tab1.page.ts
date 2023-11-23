import { Component } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';
import { ViacepService } from '../services/viacep.service';

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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  areaBuscarPokemon : string = '52011210';
  areaBusca: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: '',
  };
  
  BuscaPokemon : procurarPokemon =
  {
    name: '',
    abilities: [],
    sprites: 
    {
      front_default: ''
    },
    height: 0,
    weight: 0,
  }
  

  constructor(
    private pokeApiService : PokeApiService,
    private viaCepService : ViacepService
  ) {}
  
  buscarPokemon() {
    this.viaCepService.getViacepService(this.areaBuscarPokemon).subscribe((value) => {
      this.areaBusca.logradouro = JSON.parse(JSON.stringify(value)) ['logradouro'];
      this.areaBusca.bairro = JSON.parse(JSON.stringify(value)) ['bairro'];
      this.areaBusca.localidade = JSON.parse(JSON.stringify(value)) ['localidade'];
      this.areaBusca.uf = JSON.parse(JSON.stringify(value)) ['uf'];
    });
    this.pokeApiService.getPokeApiService().subscribe((value: any) => {
      this.BuscaPokemon.name = value.name;
      this.BuscaPokemon.sprites = value.sprites;
      this.BuscaPokemon.abilities = value.abilities.map((ability: any) => ability.ability.name)
      this.BuscaPokemon.height = value.height;
      this.BuscaPokemon.weight = value.weight;

  });

}

}
