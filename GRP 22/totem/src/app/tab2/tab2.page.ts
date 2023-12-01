import { Component, OnInit } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  contador: number = 0;
  obterNumero(): number {
    this.contador++;
    if (this.contador > 4) {
      this.contador = 1;
    }
    return this.contador;
  }
  
  public todasAsSenhas: string[] = [];

  constructor(public senhasService: SenhasService) {}

  ngOnInit() {
    this.todasAsSenhas = this.senhasService.senhasTotalArray;
  }
}
