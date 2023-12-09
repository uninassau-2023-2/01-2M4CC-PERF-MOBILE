import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { ViaCEPService } from '../services/via-cep.service';
import { BattleService } from '../services/battle.service';
import { PokemonCapturadoService } from '../services/pokemon-capturado.service';

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
    private pokeAPIService: PokeAPIService, private viaCEPService: ViaCEPService, private battleService: BattleService, private pokemonCapturadoService: PokemonCapturadoService) { }

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
          
          this.pokemonAbilitiesCount = this.pokemon.abilities.length;
          this.battleService.setPokemon1AbilitiesCount(this.pokemonAbilitiesCount);
  
          const index = this.pokemonCapturadoService.adicionarPokemonCapturado(pokemon);
          this.battleService.setPokemon1Index(index);
      });
  }

  atualizarDadosPokemon() {
    this.pokemonName = this.pokemon.name.toUpperCase();
    this.pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.randomPokemonId}.svg`;
    this.pokemonAbilitiesCount = this.pokemon.abilities.length;
    this.pokemonHeight = this.pokemon.height;
    this.pokemonWeight = this.pokemon.weight;
  }
}
