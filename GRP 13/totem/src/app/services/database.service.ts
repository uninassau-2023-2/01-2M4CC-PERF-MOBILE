import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private apiUrl = 'http://192.168.254.101:3000';

  constructor(private http: HttpClient) {}

  salvarSenha(senha: string) {
    const url = `${this.apiUrl}/salvar-senha`;
    const dados = { senha: senha };
    return this.http.post(url, dados);
  }
}
