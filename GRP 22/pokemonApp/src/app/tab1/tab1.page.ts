import { Component} from '@angular/core';
import { ViaCEPService } from '../services/via-cep.service';
import { PokeAPIService } from '../services/poke-api.service';
import { PokemonDataStorage } from '../services/pokemon-data-storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  areaBuscarPokemon: string = '';
  areaBusca: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: ''
  };
  pokemonData: any = null;
  pokemonImageUrl: string = '';

  constructor(
    private pokeAPIService: PokeAPIService,
    private viaCEPService: ViaCEPService,
    public pokemonDataStorage: PokemonDataStorage
  ) {}

  getPokemonData() {
    this.pokeAPIService.getPokeAPIService().subscribe((data) => {
      this.pokemonData = data;
      this.updatePokemonImageUrl();
      this.pokemonDataStorage.pokemonData1 = this.pokemonData;
      this.pokemonDataStorage.pokemonList.push(this.pokemonData);
    });
  }

  updatePokemonImageUrl() {
    if (this.pokemonData) {
      const pokemonId = this.pokemonData.id;
      this.pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
    }
  }

  buscarPokemon() {
    this.viaCEPService.getViaCEPService(this.areaBuscarPokemon).subscribe((value) => {
      this.areaBusca.logradouro = JSON.parse(JSON.stringify(value))['logradouro'];
      this.areaBusca.bairro = ', ' + JSON.parse(JSON.stringify(value))['bairro'];
      this.areaBusca.localidade = ' - ' + JSON.parse(JSON.stringify(value))['localidade'];
      this.areaBusca.uf = '-' + JSON.parse(JSON.stringify(value))['uf'];
      if (
      this.areaBusca.uf === "-undefined"
      ) {
        alert('O CEP está incorreto ou não existe, tente outro.');
      } else {
        this.getPokemonData();
      }
    });
  }
}