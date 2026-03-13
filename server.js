require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let cadastros = [];
let proximoId = 1;

app.use(express.json()); // --->  MIDDLEWARE

function emailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function telefoneValido(telefone) {
  const regex = /^[0-9]{10,11}$/;
  return regex.test(telefone);
}

function validarCadastro(req, res, next) {
  const { nome, email, telefone, mensagem } = req.body;

  if (!nome || nome.length < 3) {
    return res.status(400).json({
      erro: "Nome é obrigatorio e deve conter pelo menos 3 caracteres!",
    });
  }
  if (!email || !emailValido) {
    return res.status(400).json({
      erro: "Email invalido!",
    });
  }
  if (!telefone || !telefoneValido) {
    return res.status(400).json({
      erro: "Telefone invalido!",
    });
  }

  if (!mensagem || mensagem.length > 500) {
    return res.status(400).json({
      erro: "A mensagem não pode ter mais de 500 caracteres!",
    });
  }

  next();
}

// ROTA GET PRINCIPAL -->
app.get("/", (req, res) => {
  res.send("API ok!");
});

// ROTA GET PARA CADASTRO -->
app.get("/cadastros", (req, res) => {
  res.json(cadastros); // pegando var cadastros
});

// ROTA POST PARA MANDAR DADOS
app.post("/cadastros", validarCadastro, (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;

  const novoCadastro = {
    id: proximoId++,
    nome,
    email,
    telefone,
    mensagem: mensagem || null, //acrescentando null para permitir que mensagem venha em branco
  };

  cadastros.push(novoCadastro);
  res.status(201).json({
    mensagem: "Cadastro enviado com sucesso!",
    cadastro: novoCadastro,
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
