// tab2.page.ts
import { Component, OnInit } from '@angular/core';
import { BattleService } from '../services/battle.service';
import { PhotoService } from '../services/photo.service';
import { PokeAPIService } from '../services/poke-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  pokemonName: string = '';
  pokemonImageUrl: string = '';
  pokemonAbilitiesCount: number = 0;
  pokemonHeight: number = 0;
  pokemonWeight: number = 0;
  pokemon: any = { abilities: [] };
  randomPokemonId: number = 1;
  battleResult: string = '';
  resultadoBatalha: string = '';

  constructor(public photoService: PhotoService, private pokeAPIService: PokeAPIService, private battleService: BattleService) {}

  ngOnInit() {
    this.mudarPokemon();
  }

  atualizarPokemon(nome: string) {
    this.pokemonName = nome;
  }

  realizarBatalha() {
    this.battleResult = this.battleService.determineBattleResult();
  
    if (this.battleResult === 'Ganhou') {
      this.resultadoBatalha = `O perdedor é ${this.pokemonName}`;
    } else if (this.battleResult === 'Perdeu') {
      this.resultadoBatalha = `O vencedor é ${this.pokemon.name.toUpperCase()}`;
    } else {
      this.resultadoBatalha = 'Empate';
    }

    this.battleService.updateBattleResult(this.battleResult);
  }

  mudarPokemon() {
    this.displayRandomPokemon();
  }

  abrirCamera() {
    this.photoService.addNewToGallery();
  }

  displayRandomPokemon() {
    this.randomPokemonId = Math.floor(Math.random() * 100) + 1;
    this.pokeAPIService.getPokeAPIService(this.randomPokemonId).subscribe((pokemon) => {
      this.pokemon = pokemon;
      this.atualizarDadosPokemon();
      this.battleResult = '';
  
      this.pokemonAbilitiesCount = this.pokemon.abilities.length;
      this.battleService.setPokemon2AbilitiesCount(this.pokemonAbilitiesCount);
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
