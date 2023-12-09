import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public inputNovaSenha: string = '';

  async mostrarSenhaGerada(senha: string) {
    const subSenha = senha.slice(-4);
    const alert = await this.alertController.create({
      header: 'Senha Gerada',
      message: `Sua senha é: ${subSenha}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  gerarSenha(tipoSenha: string) {
    this.senhasService.novaSenha(tipoSenha);
    this.inputNovaSenha = this.senhasService.inputNovaSenha;
    this.mostrarSenhaGerada(this.inputNovaSenha);
  }  

  constructor(public senhasService: SenhasService, public alertController: AlertController) {}
  
} 