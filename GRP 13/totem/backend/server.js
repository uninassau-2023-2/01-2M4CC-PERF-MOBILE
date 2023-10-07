const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "vsdutraa",
  password: "",
  database: "totem_db",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    throw err;
  }
  console.log("Conexão com o banco de dados MySQL estabelecida");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Método POST para salvar a senha
app.post("/salvar-senha", (req, res) => {
  const senha = req.body.senha;
  const tipo_senha = req.body.tipo_senha;
  const prioridade = req.body.prioridade;

  const sql =
    "INSERT INTO senhas (senha, tipo_senha, prioridade) VALUES (?, ?, ?)";
  db.query(sql, [senha, tipo_senha, prioridade], (err, result) => {
    if (err) {
      console.error("Erro ao inserir senha no banco de dados:", err);
      res
        .status(500)
        .json({ message: "Erro ao inserir senha no banco de dados" });
      return;
    }
    console.log("Senha inserida com sucesso no banco de dados");
    res.status(200).json({ message: "Senha inserida com sucesso" });
  });
});

// Método GET para consulta de senha
app.get("/proxima-senha-prioridade", (req, res) => {
  const sql =
    "SELECT senha FROM senhas WHERE tipo_senha IS NOT NULL AND status = 'ativa' ORDER BY prioridade ASC, CAST(RIGHT(senha, 2) AS SIGNED) ASC LIMIT 1";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao buscar próxima senha do banco de dados:", err);
      res
        .status(500)
        .json({ message: "Erro ao buscar próxima senha do banco de dados" });
      return;
    }

    if (result.length > 0) {
      const proximaSenha = result[0].senha;

      const updateSql = "UPDATE senhas SET status = 'excluída' WHERE senha = ?";
      db.query(updateSql, [proximaSenha], (updateErr, updateResult) => {
        if (updateErr) {
          console.error("Erro ao atualizar o status da senha:", updateErr);
        } else {
          console.log("Senha marcada como excluída com sucesso.");
        }
      });

      res.status(200).json(proximaSenha);
    } else {
      res.status(404).json({ message: "Nenhuma senha encontrada." });
    }
  });
});

// Método GET para obter o relatório de senhas
app.get("/informacoes-todas-senhas", (req, res) => {
  const sql =
    "SELECT tipo_senha, COUNT(*) AS quantidade FROM senhas GROUP BY tipo_senha";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao buscar informações de relatório:", err);
      res
        .status(500)
        .json({ message: "Erro ao buscar informações de relatório" });
      return;
    }

    const informacoesRelatorio = {};
    result.forEach((row) => {
      informacoesRelatorio[row.tipo_senha] = row.quantidade;
    });

    res.status(200).json(informacoesRelatorio);
  });
});

// Método DELETE para limpar tabela senhas
app.delete("/limpar-tabela-senhas", (req, res) => {
  const sql = "DELETE FROM senhas";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao limpar a tabela de senhas:", err);
      res.status(500).json({ message: "Erro ao limpar a tabela de senhas" });
      return;
    }
    console.log("Tabela de senhas limpa com sucesso.");
    res.status(200).json({ message: "Tabela de senhas limpa com sucesso" });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
