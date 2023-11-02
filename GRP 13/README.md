# Alunos

* João Pedro Rodrigues Melo - 01555197
* Leonardo José Souto Almeida Filho - 01502617
* Luana Revoredo Braz de Souza- 01555750
* Pedro Braz de Oliveira Viana - 01535206
* Pedro São Paulo da Silva Santos - 01503728
* Victor Silva Dutra de Amorim - 01515499

## Apresentação - 2023-10-23

* Victor Silva Dutra de Amorim - 01515499
* Luana Revoredo Braz de Souza- 01555750
* João Pedro Rodrigues Melo - 01555197
* O grupo estendeu o projeto criando um backend (Parabéns)
* Código enviado para o github
* Criação de senhas funcionando
* Tela de atendente funcionando
    * Faltou implementar a exibição de senhas chamadas
    * Chamada de senha não seguiu o requisito de priorização de chamada
* Relatório implementado parcialmente
* Projeto rodando no emulador
* Projeto nota 10

# Processos de execução

Seguir os procedimentos abaixo:

## Configuração do Banco de Dados

1. Certifique-se de ter o MySQL instalado em sua máquina.

2. Crie e use um novo banco de dados com o nome `totem_db`:

   ```sql
   CREATE DATABASE totem_db;
   USE totem_db
   ```

3. Execute o seguinte comando SQL para criar a tabela necessária:

   ```sql
   CREATE TABLE senhas (
   senha VARCHAR(255) PRIMARY KEY,
   tipo_senha VARCHAR(2) NOT NULL,
   prioridade INT NOT NULL,
   data_chamada TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   status ENUM('ativa', 'excluída') DEFAULT 'ativa'
   );
   ```

4. Lembre de substituir o usuário do MySQL em totem/backend/server.js
