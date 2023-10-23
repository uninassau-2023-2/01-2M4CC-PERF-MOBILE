import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  senhasChamada: string[] = [];

  totemSenhas: string = 'assets/totem-de-senhas.webp';
  elisa: string = 'assets/elisa.jpeg'

  profileData = [
    { name: 'Breno Kelvyn', id: '01567954', photo: "assets/Breno.jpg"},
    { name: 'Elisa Maria', id: '01523290', photo: "assets/elisa.jpeg" },
    { name: 'Gabriely Xavier', id: '01570523', photo: "assets/gabynassau.jpg"},
    { name: 'Gustavo kauan', id: '01554652', photo: "assets/GK.jpg"},
    { name: 'João Victor', id: '01516742', photo: "assets/Foto.png" },
  ];

  constructor(public senhasService: SenhasService, private router: Router) {}

  chamarProximaSenha() {
    const proximaSenha = this.senhasService.chamarProximaSenha();
  
    if (proximaSenha) {
      // Adicione a senha à lista de senhas chamadas (limitando a 5 senhas)
      if (this.senhasService.senhasChamadas.length >= 5) {
        this.senhasService.senhasChamadas.shift(); // Remove a senha mais antiga
      }
      this.senhasService.senhasChamadas.push(proximaSenha);
    }
  }  
}
