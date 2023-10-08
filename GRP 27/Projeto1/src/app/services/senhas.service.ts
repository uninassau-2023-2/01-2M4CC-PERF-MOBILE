import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public atendidosGeral: number = 0;
  public atendidosPrior: number = 0;
  public atendidosExame: number = 0;
  public atendidosTotal:number = 0;
  public jaAtendi:number = 0;
  public atendCounter:number = 0;
  public senhasArray: { [key: string]: string[] } = {
    'SG': [],
    'SP': [],
    'SE': [],
  };
  public inputNovaSenha: string = '';

  somaGeral() { this.senhasGeral++; this.senhasTotal++; }
  somaPrior() { this.senhasPrior++; this.senhasTotal++; }
  somaExame() { this.senhasExame++; this.senhasTotal++; }

  constructor() { }

  novaSenha(tipoSenha: string = '') {
    if(tipoSenha == 'SG') {
      this.somaGeral();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDay().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SG'].push(this.inputNovaSenha);
    
    }else if(tipoSenha == 'SP') {
      this.somaPrior();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDay().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SP'].push(this.inputNovaSenha);

    
    }else if(tipoSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDay().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SE'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SE'].push(this.inputNovaSenha);
    
    
    }
    console.log(this.senhasArray)
  }


  atender(){
    if(this.atendCounter % 2 == 0){
      this.atendidosTotal++
      this.atendidosPrior++
      this.atendCounter++
      console.log("prior")
    }else{
      this.checksGE()
    }
  }
  

  checksGE(){
    if(this.jaAtendi == 0) {
      this.atendidosTotal++
      this.atendidosExame++
      this.atendCounter++
      this.jaAtendi = 1
      console.log("exame")
    }else{
      this.atendidosTotal++
      this.atendidosGeral++
      this.atendCounter++
      this.jaAtendi = 0
      console.log("geral")
    }
  }
}
  

