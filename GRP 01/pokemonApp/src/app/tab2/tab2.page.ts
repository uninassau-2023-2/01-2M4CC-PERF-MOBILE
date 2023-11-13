
import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { PokeAPIService } from '../services/poke-api.service';
import { Tab1Page } from '../tab1/tab1.page';
import { SonhoService } from '../services/sonho.service';


interface procurarPokemon {
  name: string;
  abilities: any[];
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [Tab1Page]
})
export class Tab2Page {
  acharPokemon: procurarPokemon = {
    name: '',
    abilities: [],
    sprites: {
      front_default: ''
    },
    height: 0,
    weight: 0,
  };

  corTexto: any = {};
  resultadoMensagem: string = '';

  constructor(
    public photoService: PhotoService,
    private pokeAPIService: PokeAPIService,
    private tab1Page: Tab1Page,
    private SonhoService: SonhoService
    ) {
       {
        this.encontrarPokemons(); //Carregar a função ao iniciar a página
      }
    }  

  encontrarPokemons() {
    this.pokeAPIService.getPokeAPIService()
        .subscribe((value: any) => {
          this.acharPokemon.name = value.name;
          this.acharPokemon.sprites = value.sprites;
          this.acharPokemon.abilities = value.abilities.map((ability: any) => ability.ability.name);
          this.acharPokemon.height = value.height;
          this.acharPokemon.weight = value.weight;
          this.compararAbilities(this.tab1Page.acharPokemon.abilities);
    });
  }

  compararAbilities(tab1Abilities: any[]) {
    const numeroAbilitiesTab1 = this.SonhoService.numeroDeDeus; //Habilidade Tab1
    const numeroAbilitiesTab2 = this.acharPokemon.abilities.length; //Habilidade Tab2
    
    //let tentamo:string = 'MEU POKEMON:'+numeroAbilitiesTab1+'POKEMON DAS RUAS:'+numeroAbilitiesTab2 ; 
    let tentamo:number = this.SonhoService.numeroDeDeus

    if (numeroAbilitiesTab2 === numeroAbilitiesTab1) {
      this.mudarCor('yellow', 'EMPATE');
    } else if (numeroAbilitiesTab2 > numeroAbilitiesTab1) {
      this.mudarCor('red', 'GANHOU');
    } else {
      this.mudarCor('green', 'PERDEU');
    }
  }

  mudarCor(color: string, mensagem: string) {
    this.corTexto = {
      color: color,
    };

    this.resultadoMensagem = mensagem;
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
