import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  salvarSenha(senha: string) {
    const url = `${this.apiUrl}/salvar-senha`;
    const dados = { senha: senha };
    return this.http.post(url, dados);
  }
}
