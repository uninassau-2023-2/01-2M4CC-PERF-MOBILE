import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  public inputNovaSenha: string = '';

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  public senhasArray: { SG: string[], SP: string[], SE: string[]} = { SG: [], SP: [], SE: []};
  public senhasTotalArray: string[] = [];

  somaGeral() { this.senhasGeral++; this.senhasTotal++; }
  somaPrior() { this.senhasPrior++; this.senhasTotal++; }
  somaExame() { this.senhasExame++; this.senhasTotal++; }

  
  adicionaSenhasTotal(senha: string) {
    this.senhasTotalArray.push(senha);
    console.log(this.senhasTotalArray);
  }

  novaSenha(tipoSenha: string = '') {
    const data = new Date();
    data.setMonth(data.getMonth() + 1); // Adiantar 1 mês
    data.setDate(data.getDate());

    if (tipoSenha == 'SG') {
      this.somaGeral();
      this.inputNovaSenha =
        data.getFullYear().toString().substring(2, 4) +
        data.getMonth().toString().padStart(2, '0') +
        data.getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SG.push(this.inputNovaSenha);
      this.adicionaSenhasTotal(this.inputNovaSenha);
    }
    else if (tipoSenha == 'SP') {
      this.somaPrior();
      this.inputNovaSenha =
        data.getFullYear().toString().substring(2, 4) +
        data.getMonth().toString().padStart(2, '0') +
        data.getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SP.push(this.inputNovaSenha);
      this.adicionaSenhasTotal(this.inputNovaSenha);
    }
    else if (tipoSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha =
        data.getFullYear().toString().substring(2, 4) +
        data.getMonth().toString().padStart(2, '0') +
        data.getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SE'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SE.push(this.inputNovaSenha);
      this.adicionaSenhasTotal(this.inputNovaSenha);
    }
  }

  constructor() {}
}
