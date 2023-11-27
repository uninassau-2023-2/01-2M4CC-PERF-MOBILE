import { PhotoService } from '../services/photo.service';
import { PokeAPIService } from '../services/poke-api.service';
import { Component } from '@angular/core';
import { PokemonDataStorage } from '../services/pokemon-data-storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  pokemonData: any = null;
  pokemonImageUrl: string = '';
  battleResult: string = '';

  constructor(
    public photoService: PhotoService,
    private pokeAPIService: PokeAPIService,
    public pokemonDataStorage: PokemonDataStorage
    ) {}

  ngOnInit(): void {
    this.getPokemonData();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  getPokemonData() {
    this.pokeAPIService.getPokeAPIService().subscribe((data) => {
      this.pokemonData = data;
      this.updatePokemonImageUrl();
      this.pokemonDataStorage.pokemonData2 = this.pokemonData
    });
  }

  updatePokemonImageUrl() {
    if (this.pokemonData) {
      const pokemonId = this.pokemonData.id;
      this.pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
    }
  }

  getResult() {
    if (
      this.pokemonDataStorage.pokemonData2.abilities.length >
      this.pokemonDataStorage.pokemonData1.abilities.length
    ) {
      return 'GANHOU';
    } else if (
      this.pokemonDataStorage.pokemonData2.abilities.length ===
      this.pokemonDataStorage.pokemonData1.abilities.length
    ) {
      return 'EMPATOU';
    } else {
      return 'PERDEU';
    }
  }

  getColor() {
    if (
      this.pokemonDataStorage.pokemonData2.abilities.length >
      this.pokemonDataStorage.pokemonData1.abilities.length
    ) {
      return 'red';
    } else if (
      this.pokemonDataStorage.pokemonData2.abilities.length ===
      this.pokemonDataStorage.pokemonData1.abilities.length
    ) {
      return 'yellow';
    } else {
      return 'green';
    }
  }
}