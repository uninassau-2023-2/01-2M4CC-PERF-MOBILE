import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  //contadores

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public atendidosGeral: number = 0;
  public atendidosPrior: number = 0;
  public atendidosExame: number = 0;
  public atendidosTotal:number = 0;


  public jaAtendi:number = 0;
  public senhasArray: { [key: string]: {senhaI: string, hora: string, data: string}[] } = {
    'SG': [],
    'SP': [],
    'SE': [],
  };
  public inputNovaSenha: string = '';
    

 //Começo data

  public inputData: string =
    new Date().getDate().toString().padStart(2, '0') +
    '/' + 
    new Date().getMonth().toString().padStart(2, '0') +
    '/' +
    new Date().getFullYear().toString().substring(2, 4) ;

  public inputHora: string = 
    new Date().getHours().toString().padStart(2, '0') +
    ':' +
    new Date().getUTCMinutes().toString().padStart(2, '0') ;

//Final data


  public inputGuiche: number = Math.random() * 15;



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
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SG'].push({senhaI: this.inputNovaSenha, hora:this.inputHora, data:this.inputData});
    
    }else if(tipoSenha == 'SP') {
      this.somaPrior();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SP'].push({senhaI: this.inputNovaSenha, hora:this.inputHora, data:this.inputData});

    
    }else if(tipoSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SE'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SE'].push({senhaI: this.inputNovaSenha, hora:this.inputHora, data:this.inputData});
    
    
    }
    
    console.log(this.senhasArray)
  }


  atender(){
    if(this.atendidosTotal % 2 == 0 && this.atendidosPrior < this.senhasPrior){
      this.atendidosTotal++
      this.atendidosPrior++
    }else{
      this.checksGE()
    }
  }
  

  checksGE(){
    if(this.jaAtendi == 0 && this.atendidosExame < this.senhasExame) {
      this.atendidosTotal++
      this.atendidosExame++
      this.jaAtendi = 1
    }else if(this.atendidosGeral < this.senhasGeral){
      this.atendidosTotal++
      this.atendidosGeral++
      this.jaAtendi = 0
    }else if(this.atendidosPrior < this.senhasPrior){ //caso exista mais de um prioritário
      this.atendidosTotal++
      this.atendidosPrior++
    }else{
      alert("Não é possível atender pacientes que não existem")
    }
  }
}

