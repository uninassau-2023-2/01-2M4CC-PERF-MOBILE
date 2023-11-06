import { Component } from '@angular/core';
import { PokeAPIService } from '../poke-api.service';
import { ViaCepService } from '../via-cep.service';
import { Observable } from 'rxjs';

interface Pokemon {
  nome: string;
  img: any;
  habilidades: string[];
  altura: number;
  peso: number;
}

// ...




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pokemon: Pokemon = {
    nome: "",
    img: "",
    habilidades: [],
    altura: 0,
    peso: 0
  };
  areaBuscarPokemon: string = "";
  areaBusca: any = {
    bairro: "",
    localidade: '',
    logradouro: '',
    uf: ''
  }
  constructor(
    private PokeAPService: PokeAPIService,
    private viaCEPService: ViaCepService
  ) {}

  buscarPokemon(){
    this.viaCEPService.getViaCEPService(this.areaBuscarPokemon).subscribe((value) => {
      this.areaBusca.logradouro = JSON.parse(JSON.stringify(value)) ['logradouro'];
      this.areaBusca.bairro = ", " + JSON.parse(JSON.stringify(value))['bairro'];
      this.areaBusca.localidade = " - " + JSON.parse(JSON.stringify(value))['localidade'];
      this.areaBusca.uf = " - " + JSON.parse(JSON.stringify(value))['uf'];
    });

    this.PokeAPService.getPokeAPIService().subscribe((value) => {
      this.pokemon.nome = JSON.parse(JSON.stringify(value)) ['name'];
      this.pokemon.img  = JSON.parse(JSON.stringify(value)) ['sprites'];
      this.pokemon.habilidades = JSON.parse(JSON.stringify(value)) ['abilities'];
      this.pokemon.altura = JSON.parse(JSON.stringify(value)) ['height'];
      this.pokemon.peso = JSON.parse(JSON.stringify(value)) ['weight'];

      console.log(this.pokemon.img)
    }
    )   
  }
}
