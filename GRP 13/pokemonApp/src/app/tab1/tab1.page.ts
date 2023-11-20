import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { ViaCEPService } from '../services/via-cep.service';
import { PokemonDataService } from '../services/pokemon-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  areaBuscarPokemon: string = '52011210';
  areaBusca: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: '',
  };
  pokemon: any = {
    nome: '',
    sprites: '',
    habilidades: '',
    altura: '',
    peso: '',
  };

  constructor(
    private pokeAPIService: PokeAPIService,
    private viaCEPService: ViaCEPService,
    public pokemonDataService: PokemonDataService
  ) {}

  buscarPokemon() {
    this.viaCEPService
      .getViaCEPService(this.areaBuscarPokemon)
      .subscribe((value) => {
        this.areaBusca.logradouro = JSON.parse(JSON.stringify(value))[
          'logradouro'
        ];
        this.areaBusca.bairro = JSON.parse(JSON.stringify(value))['bairro'];
        this.areaBusca.localidade = JSON.parse(JSON.stringify(value))[
          'localidade'
        ];
        this.areaBusca.uf = JSON.parse(JSON.stringify(value))['uf'];
      });
    this.pokeAPIService.getPokeAPIService().subscribe((value) => {
      this.pokemon.nome = JSON.parse(JSON.stringify(value))['name'];
      this.pokemon.sprites = JSON.parse(JSON.stringify(value))[
        'sprites'
      ].other.dream_world.front_default;
      this.pokemon.habilidades = JSON.parse(JSON.stringify(value))[
        'abilities'
      ].length;
      this.pokemon.altura = JSON.parse(JSON.stringify(value))['height'] / 10;
      this.pokemon.peso = JSON.parse(JSON.stringify(value))['weight'] / 10;
    });

    this.pokemonDataService.pokemon1 = this.pokemon;
  }
}
