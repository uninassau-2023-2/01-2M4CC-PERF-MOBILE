import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { ViaCEPService } from '../services/via-cep.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  areaBuscarPokemon: string = '52011210';
  areaBusca: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: ''
  };
  randomPokemonId: number = 1;

  pokemonName: string = '';
  pokemonImageUrl: string = '';
  pokemonAbilitiesCount: number = 0;
  pokemonHeight: number = 0;
  pokemonWeight: number = 0;
  pokemon: any = { abilities: [] };

  constructor(
    private pokeAPIService: PokeAPIService,
    private viaCEPService: ViaCEPService
  ) { }

  buscarPokemon() {
    this.viaCEPService.getViaCEPService(this.areaBuscarPokemon)
      .subscribe((value) => {
        this.areaBusca.logradouro = JSON.parse(JSON.stringify(value))['logradouro'];
        this.areaBusca.bairro = ', ' + JSON.parse(JSON.stringify(value))["bairro"];
        this.areaBusca.localidade = ' - ' + JSON.parse(JSON.stringify(value))['localidade'];
        this.areaBusca.uf = '-' + JSON.parse(JSON.stringify(value))['uf'];
      });

    this.randomPokemonId = Math.floor(Math.random() * 100) + 1;
    this.pokeAPIService.getPokeAPIService(this.randomPokemonId)
      .subscribe((pokemon) => {
        this.pokemon = pokemon;
        this.atualizarDadosPokemon();
      });
  }

  atualizarDadosPokemon() {
    this.pokemonName = this.pokemon.name.toUpperCase();
    this.pokemonImageUrl = this.pokemon.sprites.other.dream_world.front_default;
    this.pokemonAbilitiesCount = this.pokemon.abilities.length;
    this.pokemonHeight = this.pokemon.height;
    this.pokemonWeight = this.pokemon.weight;
  }
}
