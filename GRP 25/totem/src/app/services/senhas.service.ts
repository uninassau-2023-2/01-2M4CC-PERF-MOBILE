import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  constructor(
    private alertController: AlertController
  ) {
    
  }

  public guichesUso: number[] = [];
  public data_hora: string[] = []; 

  public senhasChamadas: string[] = [];
  public registro: string[] = [];

  public usc: string = '';
  public usc_tipo: string = '';

  public senhas: any[] = [];
  public atendimento: any[] = [];

  public SG: number[] = [];
  public SP: number[] = [];
  public tm_sg: number = 0;
  public tm_sp: number = 0;

  public senhasGeral: number = 0;
  somaGeral(){this.senhasGeral++; this.senhasTotal++;}

  public senhasGeral_atendidas: number = 0;
  somaGeral_Atendidas(){this.senhasGeral_atendidas++; this.senhasTotal_atendidas++;}

  public senhasPrior: number = 0;
  somaPrior(){this.senhasPrior++; this.senhasTotal++;}

  public senhasPrior_atendidas: number = 0;
  somaPrior_Atendidas(){this.senhasPrior_atendidas++; this.senhasTotal_atendidas++;}

  public senhasExame: number = 0;
  somaExame(){this.senhasExame++; this.senhasTotal++}

  public senhasExame_atendidas: number = 0;
  somaExame_Atendidas(){this.senhasExame_atendidas++; this.senhasTotal_atendidas++}

  public senhasTotal: number = 0;
  public senhasTotal_atendidas: number = 0;


  novaSenha(tipoSenha: string = ''){
    
    if(tipoSenha == 'SG'){

      this.somaGeral();  
      this.vetorSenha(this.gerarSenha(tipoSenha, this.senhasGeral), this.gerarNumeracao('SG'), 'SG', this.inputData_Hora());

    } else if (tipoSenha == 'SP'){
      
      this.somaPrior();
      this.vetorSenha(this.gerarSenha(tipoSenha, this.senhasPrior), this.gerarNumeracao('SP'), 'SP', this.inputData_Hora());

    } else {
      
      this.somaExame();
      this.vetorSenha(this.gerarSenha(tipoSenha, this.senhasExame), this.gerarNumeracao('SE'), 'SE', this.inputData_Hora());

    }
  }

  vetorSenha(nome: string, num: string, tipo: string, DH_Emi: string){
    let senha = {
      nome: nome, 
      num: num, 
      tipo: tipo, 
      DH_Emi: DH_Emi, 
    };
    this.senhas.push(senha);
  }

  gerarSenha(tipoSenha:string, numero:number){ 
    return new Date().getFullYear().toString().substring(2, 4) +
           (new Date().getMonth()+1).toString().padStart(2, '0') +
           new Date().getDate().toString().padStart(2, '0') + 
           '_' +
           tipoSenha + 
           (numero).toString().padStart(2, '0');
  }

  gerarNumeracao(tipo:string){
    if (tipo == 'SG'){
      return this.senhasGeral.toString().padStart(2, '0');
    } else if (tipo == 'SP'){
      return this.senhasPrior.toString().padStart(2, '0');
    } else {
      return this.senhasExame.toString().padStart(2, '0')
    }
  }

  inputData_Hora(){
    return new Date().getFullYear().toString().substring(2, 4) + '/' +
           (new Date().getMonth()+1).toString().padStart(2, '0') + '/' +
           new Date().getDate().toString().padStart(2, '0') +
           ' - ' +
           new Date().getHours().toString().padStart(2, '0') + ':' +
           new Date().getMinutes().toString().padStart(2, '0');
  }

  chamarSenha(){

    if(this.senhas[0] != undefined){
      
      if(this.usc == ''){ 
        
        if (this.buscarSenha('SP') != -1){
          this.exibirSenha(this.buscarSenha('SP'));
        } else if (this.buscarSenha('SE') != -1){
          this.exibirSenha(this.buscarSenha('SE'));
        } else {
          this.exibirSenha(this.buscarSenha('SG'));
        } 
        
      } else if (this.usc_tipo == 'SG'){

        if (this.buscarSenha('SP') != -1){
          this.exibirSenha(this.buscarSenha('SP'));
        } else if (this.buscarSenha('SE') != -1){
          this.exibirSenha(this.buscarSenha('SE'));
        } else if (this.buscarSenha('SG') != -1){
          this.exibirSenha(this.buscarSenha('SG'));
        } else {
          this.presentAlert2();
        }

      } else if (this.usc_tipo == 'SP'){

        if (this.buscarSenha('SE') != -1){
          this.exibirSenha(this.buscarSenha('SE'));
        } else if (this.buscarSenha('SG') != -1){
          this.exibirSenha(this.buscarSenha('SG'));
        } else if (this.buscarSenha('SP') != -1){
          this.exibirSenha(this.buscarSenha('SP'));
        } else {
          this.presentAlert2();
        }

      } else if (this.usc_tipo == 'SE'){

        if (this.buscarSenha('SG') != -1){
          this.exibirSenha(this.buscarSenha('SG'));
        } else if (this.buscarSenha('SP') != -1){
          this.exibirSenha(this.buscarSenha('SP'));
        } else if (this.buscarSenha('SE') != -1){
          this.exibirSenha(this.buscarSenha('SE'));
        } else {
          this.presentAlert2();
        }

      }

    } else {
      this.presentAlert();
    } 

  }

  buscarSenha(tipo: string){

    let index: number = 0;
    let find: boolean = false;

    for (let i = 0; find == false && i < this.senhas.length; i++){
      if (this.senhas[i].tipo == tipo && this.senhasChamadas.includes(this.senhas[i].nome) == false && this.veRegistro(i) == true){
        find = true;
        index = i;
      }
    }

    if (find == false) {
      return -1
    } else {
      return index
    }
  }

  exibirSenha(index: number){
    if (this.veRegistro(index)){
      this.usc = this.senhas[index].nome;
      this.usc_tipo = this.senhas[index].tipo;
      this.registro.push(this.usc);
      this.senhasChamadas.push(this.usc);
      this.vetorAtendimento(this.inputData_Hora(), this.usc);
      this.timer(this.usc, this.usc_tipo);
    } else {
      this.presentAlert2();
    }
    
  }

  veRegistro(index: number){
    if(this.registro.includes(this.senhas[index].nome) == false){
      return true
    } else {
      return false
    }
  }

  vetorAtendimento(DH_aten: string, senha_aten: string){
    let atendiemento = {
      senha_aten: senha_aten,
      DH_aten: DH_aten,
      guiche: this.gerarGuiche(Math.floor(Math.random()*5)).toString().padStart(2, '0')
    };
    
    let index: number = 0;
    let find: boolean = false;

    for (let i = 0; find == false && i < this.senhas.length; i++){
      if (this.senhas[i].nome == senha_aten){
        find = true;
        index = i;
      }
    }

    this.atendimento[index] = atendiemento;
  }

  gerarGuiche(index: number){
    let numero: number = index;
    while (this.guichesUso.includes(numero) == true){
      numero = (Math.floor(Math.random()*5))
    }
    this.guichesUso.push(numero);
    return numero;
  }

  timer(sen_aten: string, tipo: string){

    let tempo: number = this.setTimer(tipo)
    let find: boolean = false;    
    //console.log(tempo);

    setTimeout(()=>{

      this.senhasChamadas.splice(this.senhasChamadas.indexOf(sen_aten),1); 

      for (let i = 0; find == false && i < this.senhas.length; i++){
        if (this.atendimento[i].senha_aten == sen_aten){
          find = true;
          this.guichesUso.splice(this.atendimento[i].guiche, 1);
        }
      }

      if (tipo == 'SG') {
        this.somaGeral_Atendidas();
      } else if (tipo == 'SP'){
        this.somaPrior_Atendidas();
      } else {
        this.somaExame_Atendidas();
      }
      
    },tempo);

  }

  setTimer(tipo: string){  
    if (tipo == 'SG') {
      let tempo = (5 + Math.floor(Math.random()*3))*1000
      //tempo = 5000
      this.SG.push(Math.floor(tempo));
      this.tm_sg = Math.floor((this.media(this.SG))/1000);
      return tempo
    } else if (tipo == 'SP') {
      let tempo = (15 + Math.floor(Math.random()*5))*1000
      //tempo = 15000
      this.SP.push(Math.floor(tempo));
      this.tm_sp = Math.floor((this.media(this.SP))/1000);
      return  tempo
    } else {
      //return 1000
      return 500 + Math.random()*1000
    }
  }

  media(senha: number[]){
    if(senha.length == 0){
      return 0
    } else {

      const soma = senha.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
      const media = soma/senha.length;

      return media
    }
  }

  sinc(senha_aten: string){

    let index: number = 0;
    let find: boolean = false;

    for (let i = 0; find == false && i < this.senhas.length; i++){
      if (this.senhas[i].nome == senha_aten){
        find = true;
        index = i;
      }
    }

    return index
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Nenhuma senha inserida!',
      message: 'Por favor aguarde até que uma senha seja solicitada',
      buttons: ['OK'],
    });

    await alert.present();
  }
  //
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Todas as senhas foram Chamadas!',
      message: 'Por favor aguarde até que uma senha seja solicitada',
      buttons: ['OK'],
    });

    await alert.present();
  }

}