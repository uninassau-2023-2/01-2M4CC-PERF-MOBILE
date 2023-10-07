import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SenhasService {
  private senhaCount: number = 0;

  constructor(private http: HttpClient) {}

  public inputNovaSenha: string = '';

  novaSenha(tipoSenha: string = '', prioridade: number = 0) {
    const data = new Date();
    const ano = data.getFullYear().toString().substring(2, 4);
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const dia = data.getDate().toString().padStart(2, '0');

    const senha = `${ano}${mes}${dia}-${tipoSenha}${(++this.senhaCount)
      .toString()
      .padStart(2, '0')}`;

    const senhaParaSalvar = senha;
    this.inputNovaSenha = senha;
    this.http
      .post<{ message: string }>('http://localhost:3000/salvar-senha', {
        senha: senhaParaSalvar,
        tipo_senha: tipoSenha,
        prioridade: prioridade,
      })
      .subscribe(
        (resultado) => {
          console.log(
            'Senha salva com sucesso no banco de dados:',
            resultado.message
          );
        },
        (erro) => {
          console.error('Erro ao salvar senha no banco de dados:', erro);
        }
      );

    console.log(senha);
  }

  chamarProximaSenhaPrioridade() {
    return this.http.get<string>(
      'http://localhost:3000/proxima-senha-prioridade'
    );
  }

  getRelatorio() {
    return this.http.get<Record<string, number>>(
      'http://localhost:3000/informacoes-todas-senhas'
    );
  }

  limparTabelaSenhas(): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      'http://localhost:3000/limpar-tabela-senhas'
    );
  }
}
