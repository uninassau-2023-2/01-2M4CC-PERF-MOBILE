# Alunos

* Victor Silva Dutra de Amorim - 01515499
* Luana Revoredo Braz de Souza- 01555750
* João Pedro Rodrigues Melo - 01555197
* Pedro São Paulo da Silva Santos - 01503728
* Pedro Braz de Oliveira Viana - 01535206
* Leonardo José Souto Almeida Filho - 01502617


## Configuração do Banco de Dados

1. Certifique-se de ter o MySQL instalado em sua máquina.

2. Crie um novo banco de dados com o nome `totem_db`:

   ```sql
   CREATE DATABASE totem_db;
   ```
   
3. Use o banco de dados `totem_db`:

	```sql
	USE totem_db;
	``` 
4. Execute o seguinte comando SQL para criar a tabela necessária:

	``` CREATE TABLE senhas (
	senha VARCHAR(255) PRIMARY KEY,
	tipo_senha VARCHAR(2) NOT NULL,
	prioridade INT NOT NULL,
	data_chamada TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	status ENUM('ativa', 'excluída') DEFAULT 'ativa'
	);
	``` 
5. Lembre de substituir o usuário do MySQL em totem/backend/server.js

   
   