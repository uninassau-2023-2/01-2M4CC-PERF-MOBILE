import { PokedexService } from '../services/pokedex.service';
import { PokeAPIService } from '../services/poke-api.service';
import { Component } from '@angular/core';
import { SonhoService } from '../services/sonho.service';
import { DadosService } from '../services/DadosService';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  pokemonList = this.pokedexService.getPokemons();
  
  pokemonsJson = []
  verde: any = {};

  vermelho: any = {};

  amarelo: any = {};

  constructor(
    private pokeAPIService: PokeAPIService,
    private SonhoService: SonhoService,
    private pokedexService: PokedexService,
    private dadosService: DadosService
  ) {
    this.OnOK()
    
  }
    OnOK() {
      this.usaCor('green', 'red', 'yellow');
  }
  usaCor(color: string, cor: string, cores: string) {
    this.verde = {
      color: color,
    };
    this.vermelho = {
      color: cor,
    };
    this.amarelo = {
      color: cores,
    };
}

}