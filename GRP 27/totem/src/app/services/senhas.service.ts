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
  public atendidosTotal: number = 0;


  public jaAtendi: number = 0;
  public senhasArray: { [key: string]: { senhaI: string, hora: string, data: string}[] } = {
    'SG': [],
    'SP': [],
    'SE': [],
  };
  public chamadas: string[] = [];
  public mostrar: string[] = [];
  public inputNovaSenha: string = '';


  //Começo data

  public inputData: string =
    new Date().getDate().toString().padStart(2, '0') +
    '/' +
    new Date().getMonth().toString().padStart(2, '0') +
    '/' +
    new Date().getFullYear().toString().substring(2, 4);

  public inputHora: string =
    new Date().getHours().toString().padStart(2, '0') +
    ':' +
    new Date().getUTCMinutes().toString().padStart(2, '0');

  //Final data

  somaGeral() { this.senhasGeral++; this.senhasTotal++; }
  somaPrior() { this.senhasPrior++; this.senhasTotal++; }
  somaExame() { this.senhasExame++; this.senhasTotal++; }

  constructor() { }

  novaSenha(tipoSenha: string = '') {
    if (tipoSenha == 'SG') {
      this.somaGeral();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SG'].push({ senhaI: this.inputNovaSenha, hora: this.inputHora, data: this.inputData});

    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SP'].push({ senhaI: this.inputNovaSenha, hora: this.inputHora, data: this.inputData});


    } else if (tipoSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SE'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SE'].push({ senhaI: this.inputNovaSenha, hora: this.inputHora, data: this.inputData});


    }
}

atender() {
  this.mostrar = this.chamadas
  if (this.atendidosTotal < this.senhasTotal) {
    if (this.atendidosTotal % 2 == 0 && this.atendidosPrior < this.senhasPrior) {
      this.atendidosTotal++;
      this.atendidosPrior++;
      this.atenderSenha('SP');
    } else if (this.jaAtendi == 0 && this.atendidosExame < this.senhasExame) {
      this.atendidosTotal++;
      this.atendidosExame++;
      this.jaAtendi = 1;
      this.atenderSenha('SE');
    } else if (this.atendidosGeral < this.senhasGeral) {
      this.atendidosTotal++;
      this.atendidosGeral++;
      this.jaAtendi = 0;
      this.atenderSenha('SG');
    } else {
      alert("Não é possível atender pacientes que não existem");
    }
  }
}

atenderSenha(tipoSenha: string) {
  const senhasChamadas = this.senhasArray[tipoSenha];
  if (senhasChamadas.length > 0) {
    for (const senhaChamada of senhasChamadas) {
      const novaSenha = senhaChamada.senhaI;
      if (!this.mostrar.includes(novaSenha)) {
        this.mostrar.unshift(novaSenha);
      }
      if (this.mostrar.length > 5) {
        this.mostrar.pop();
      }
    }
  }
}
}