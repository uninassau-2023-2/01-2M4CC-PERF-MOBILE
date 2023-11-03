import { Component } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';
import { ViacepService } from '../services/viacep.service';

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
    this.pokeApiService.getPokeApiService();
  }


}
