import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  public senhasAtendidas: number = 0;
  public inputNovaSenha: string = '';
  public senhasArray: { [key: string]: { senha: string, dataHora: Date }[] } = {
    'SG': [],
    'SP': [],
    'SE': []
  };
  public senhasGeradas: string[] = [];
  public senhasChamadas: string[] = [];

  constructor() { }

  public somaGeral() {
    this.senhasGeral++;
    this.senhasTotal++;
  }

  public somaPrior() {
    this.senhasPrior++;
    this.senhasTotal++;
  }

  public somaExame() {
    this.senhasExame++;
    this.senhasTotal++;
  }

  novaSenha(tipoSenha: string = ''): string {
    let senhaGerada = '';
    const dataHoraAtual = new Date();

    if (tipoSenha == 'SG') {
      this.somaGeral();
      senhaGerada =
        dataHoraAtual.getFullYear().toString().substring(2, 4) +
        (dataHoraAtual.getMonth() + 1).toString().padStart(2, '0') +
        dataHoraAtual.getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SG'].push({ senha: senhaGerada, dataHora: dataHoraAtual });
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      senhaGerada =
        dataHoraAtual.getFullYear().toString().substring(2, 4) +
        (dataHoraAtual.getMonth() + 1).toString().padStart(2, '0') +
        dataHoraAtual.getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SP'].push({ senha: senhaGerada, dataHora: dataHoraAtual });
    } else if (tipoSenha == 'SE') {
      this.somaExame();
      senhaGerada =
        dataHoraAtual.getFullYear().toString().substring(2, 4) +
        (dataHoraAtual.getMonth() + 1).toString().padStart(2, '0') +
        dataHoraAtual.getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SE'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SE'].push({ senha: senhaGerada, dataHora: dataHoraAtual });
    }

    this.senhasGeradas.push(senhaGerada);

    console.log(this.senhasArray);
    return senhaGerada;
  }

  getSenhaData(tipoSenha: string, senha: string): Date | null {
    const senhaObj = this.senhasArray[tipoSenha].find(item => item.senha === senha);
    return senhaObj ? senhaObj.dataHora : null;
  }

  chamarProximaSenha(): string | null {
    if (this.senhasGeradas.length > 0) {
      const proximaSenha = this.selecionarProximaSenha();

      const index = this.senhasGeradas.indexOf(proximaSenha);
      if (index !== -1) {
        this.senhasGeradas.splice(index, 1);
      }

      if (!this.senhasChamadas.includes(proximaSenha)) {
        this.senhasAtendidas++;
        return proximaSenha;
      }
    }
    
    return null;
  }

  private selecionarProximaSenha(): string {
    // Prioridade das senhas: SP > SE > SG
    const senhasPrioritarias = this.senhasGeradas.filter(senha => senha.includes('SP'));
    const senhasExame = this.senhasGeradas.filter(senha => senha.includes('SE'));
    const senhasGerais = this.senhasGeradas.filter(senha => senha.includes('SG'));
  
    if (senhasPrioritarias.length > 0) {
      return senhasPrioritarias[0];
    }
  
    if (senhasExame.length > 0) {
      return senhasExame[0];
    }
  
    if (senhasGerais.length > 0) {
      return senhasGerais[0];
    }
  
    return '';
  }
  
}
