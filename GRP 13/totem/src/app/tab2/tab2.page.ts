// tab2.page.ts

import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  senhaChamada: string = 'Nenhuma senha disponível';
  ultimasSenhasChamadas: string[] = [];

  constructor(public senhasService: SenhasService) {}

  chamarProximaSenhaPrioridade() {
    this.senhasService.chamarProximaSenhaPrioridade().subscribe(
      (proximaSenha) => {
        if (proximaSenha) {
          this.senhaChamada = proximaSenha;
        } else {
          this.senhaChamada = 'Nenhuma senha disponível';
        }
      },
      (erro) => {
        console.error(
          'Erro ao chamar a próxima senha do banco de dados:',
          erro
        );
        this.senhaChamada = 'Nenhuma senha disponível';
      }
    );
  }
}
