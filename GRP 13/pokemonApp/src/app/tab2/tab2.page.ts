import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { PokeAPIService } from '../services/poke-api.service';
import { PokemonDataService } from '../services/pokemon-data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(
    public photoService: PhotoService,
    public pokeAPIService: PokeAPIService,
    public pokemonDataService: PokemonDataService
  ) {}

  ngOnInit(): void {
    this.buscarPokemon();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  pokemon: any = {
    nome: '',
    sprites: '',
    habilidades: '',
    altura: '',
    peso: '',
  };

  buscarPokemon() {
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

    this.pokemonDataService.pokemon2 = this.pokemon;
  }

  getResultado() {
    if (
      this.pokemonDataService.pokemon2.habilidades >
      this.pokemonDataService.pokemon1.habilidades
    ) {
      return 'GANHOU!';
    } else if (
      this.pokemonDataService.pokemon2.habilidades ===
      this.pokemonDataService.pokemon1.habilidades
    ) {
      return 'EMPATE!';
    } else {
      return 'PERDEU!';
    }
  }

  getColor() {
    if (
      this.pokemonDataService.pokemon2.habilidades >
      this.pokemonDataService.pokemon1.habilidades
    ) {
      return 'green';
    } else if (
      this.pokemonDataService.pokemon2.habilidades ===
      this.pokemonDataService.pokemon1.habilidades
    ) {
      return 'yellow';
    } else {
      return 'red';
    }
  }
}
