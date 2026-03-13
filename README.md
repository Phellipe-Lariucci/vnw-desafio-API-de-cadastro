# vnw-desafio-API-de-cadastro

# API de Cadastro de Profissionais Voluntários

Este projeto foi desenvolvido como uma atividade prática para reforçar os primeiros conhecimentos em **Back-End com Node.js e Express**. A proposta consiste em uma API simples de cadastro, criada para simular o funcionamento básico de um sistema de registro de profissionais voluntários.

Durante a construção da aplicação, o foco foi exercitar conceitos essenciais do desenvolvimento de APIs, como definição de rotas, uso correto dos verbos HTTP, validação de dados recebidos e comunicação entre cliente e servidor.

---

# 🚀 Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- Postman, utilizado para testar as requisições

---

# 📌 Funcionalidades da API

A aplicação oferece duas funcionalidades principais:

- cadastrar profissionais voluntários
- listar todos os profissionais já cadastrados

Os dados não são salvos em banco de dados. Neste projeto, eles ficam armazenados **temporariamente em memória**, por meio de um **array**, já que o objetivo é exclusivamente educacional.

---

## Exemplo de corpo da requisição

```json
{
  "nome": "Luiz Phellipe",
  "email": "luiz@mail.com",
  "telefone": "34999999999",
  "mensagem": "Gostaria de participar do programa médicos e dentistas voluntários."
}
```

# ✅ Validações implementadas

Para assegurar que os dados enviados estejam corretos, a API conta com algumas regras de validação:

| Campo    | Regra                                         |
| -------- | --------------------------------------------- |
| Nome     | Deve possuir pelo menos **3 caracteres**      |
| Email    | Deve estar em um **formato de e-mail válido** |
| Telefone | Deve conter **10 ou 11 dígitos numéricos**    |
| Mensagem | Deve ter no máximo **500 caracteres**         |

Quando alguma dessas condições não é atendida, a API retorna uma resposta com **status 400**, informando que os dados enviados são inválidos.

---

# 🧠 Conceitos praticados

Durante o desenvolvimento deste projeto, foram aplicados conceitos fundamentais de back-end, como:

- Criação de uma API com Node.js
- Utilização do framework Express
- Uso dos verbos HTTP **GET** e **POST**
- Aplicação de middlewares
- Validação de dados recebidos do cliente
- Armazenamento temporário de informações em memória
- Testes de endpoints com o Postman

---

# ⚙️ Middleware utilizado

Para permitir que a aplicação interprete corretamente requisições em formato JSON, foi utilizado o middleware abaixo:

```javascript
app.use(express.json());
```
Esse recurso faz com que o servidor consiga ler e processar corretamente os dados enviados no corpo das requisições.

---

# 🧪 Testando a API

As rotas da aplicação foram testadas com o **Postman**.

## Passos básicos para realizar os testes

1. Iniciar o servidor Node
2. Abrir o Postman
3. Testar as rotas disponíveis:
   - **GET** `/cadastro`
   - **POST** `/cadastro`
4. Enviar os dados no formato **JSON**

---

# 🎯 Objetivo do projeto

Ao concluir este projeto, foi possível compreender melhor conceitos importantes do desenvolvimento back-end, como:

- A criação de uma API funcional
- A comunicação entre cliente e servidor
- A validação de dados recebidos
- A organização de rotas de forma estruturada

---

# 📚 Projeto educacional

Este projeto foi desenvolvido com fins educacionais, com o objetivo de praticar os **fundamentos de desenvolvimento Back-End**.

Além disso, ele pode servir como base para evoluções futuras, incluindo:

- Banco de dados
- Autenticação
- Arquitetura MVC
- Middlewares personalizados
- Deploy de APIs

---

💻 Desenvolvido como prática de **Back-End com Node.js e Express**

