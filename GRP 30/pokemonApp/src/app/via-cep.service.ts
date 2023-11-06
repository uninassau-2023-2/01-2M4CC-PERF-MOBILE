import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(private httpCliente: HttpClient) { }
  getViaCEPService(cep: string){
    return this.httpCliente.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
