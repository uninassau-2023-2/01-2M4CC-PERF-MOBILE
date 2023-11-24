import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { PokedexService } from '../services/pokedex.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    public pokedexService: PokedexService,
    private alertController: AlertController,
  ) {}

  ionViewDidEnter() {
    this.semPokemon();
  }

  semPokemon(){
    if (this.pokedexService.dexPokemons[0] == undefined){
      this.presentAlertPokemon()
    }
  }

  async presentAlertPokemon() {
    const alert = await this.alertController.create({
      header: 'Nenhum Pokemon capturado!',
      message: 'Por favor realize uma busca antes de verificar a Pokedex',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
