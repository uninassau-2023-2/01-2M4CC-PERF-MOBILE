import { Component, OnInit } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  
  public senhasSG: string[] = [];
  public senhasSP: string[] = [];
  public senhasSE: string[] = [];


  constructor(public senhasService: SenhasService) {}

  ngOnInit() {
    this.senhasSG = this.senhasService.senhasArray.SG;
    this.senhasSP = this.senhasService.senhasArray.SP;
    this.senhasSE = this.senhasService.senhasArray.SE;
  }
}
