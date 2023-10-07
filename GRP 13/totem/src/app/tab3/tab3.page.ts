// tab3.page.ts

import { Component, OnInit } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  informacoesRelatorio: Record<string, number> = {};

  constructor(public senhasService: SenhasService) {}

  ngOnInit() {
    this.carregarRelatorio();
  }

  carregarRelatorio() {
    this.senhasService.getRelatorio().subscribe(
      (resultado) => {
        console.log(resultado);
        this.informacoesRelatorio = resultado;
      },
      (erro) => {
        console.error('Erro ao carregar informações de relatório:', erro);
      }
    );
  }

  atualizarRelatorio() {
    this.carregarRelatorio();
  }

  limparTabelaSenhas() {
    this.senhasService.limparTabelaSenhas().subscribe(
      (resultado) => {
        console.log(resultado.message);

        this.atualizarRelatorio();
      },
      (erro) => {
        console.error('Erro ao limpar a tabela de senhas:', erro);
      }
    );
  }
}
