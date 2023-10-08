import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public senhasService: SenhasService) {}

  gerarSenha(tipoSenha: string) {
    this.senhasService.novaSenha(tipoSenha);
    // Adicionar a senha gerada ao histórico (limitar o tamanho do histórico, se necessário)
    this.senhasService.senhasArray.push(this.senhasService.inputNovaSenha);
  }
}
