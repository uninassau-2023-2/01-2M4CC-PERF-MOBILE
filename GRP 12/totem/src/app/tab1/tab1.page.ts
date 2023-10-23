import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  inputNovaSenha: string = '';
  senhasChamadas: string[] = [];

  constructor(public senhasService: SenhasService) {}

  gerarSenhaGeral() {
    this.inputNovaSenha = this.senhasService.novaSenha('SG');
    this.atualizarSenhasChamadas();
  }
  
  gerarSenhaPrioritaria() {
    this.inputNovaSenha = this.senhasService.novaSenha('SP');
    this.atualizarSenhasChamadas();
  }
  
  gerarSenhaExame() {
    this.inputNovaSenha = this.senhasService.novaSenha('SE');
    this.atualizarSenhasChamadas();
  }
  
  // Método para atualizar a lista de senhas chamadas
  private atualizarSenhasChamadas() {
    this.senhasChamadas = this.senhasService.senhasChamadas;
  }
  
}
