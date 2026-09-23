# CRUD - Empresa
---
Projeto Empresarial para aula de Desenvolvimento de Sistemas - Backend
---
```JSON
 {
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-01",
    "valor": 3500.00,
    "patrimonio": "PAT-00125"
  },
  {
    "id": 2,
    "item": "Projetor Epson",
    "local": "Sala 03",
    "dataRegistro": "2026-09-03",
    "valor": 2800.00,
    "patrimonio": "PAT-00126"
  }
```
---
# TECNOLOGIAS
---
* VScode
* Node.js
* JavaScript
* JSON
---
# PASSOS PARA EXECUÇÂO
* 1 - Abra com VsCode e em um teminal CMD
```JSON
npm init -y
npm install express
npm run dev
```
* 2 Teste as rotas com a extensão Thunder Client do VsCode
# PARA TESTAR O FRONT-END
* Abra o Thunder Client do VsCode
# ROTAS
---
```JSON
Post time: http://localhost:3000
Get times: http://localhost:3000
Put time: http://localhost:3000/id
Delete time: http://localhost:3000/id
```
# EXEMPLO DE REQUISIÇOES
---
* Mostrar GET
```JSON
[
  {
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-01",
    "valor": 3500,
    "patrimonio": "PAT-00125"
  },
  {
    "id": 2,
    "item": "Projetor Epson",
    "local": "Sala 03",
    "dataRegistro": "2026-09-03",
    "valor": 2800,
    "patrimonio": "PAT-00126"
  },
  {
    "id": 3,
    "item": "S21 Ultra",
    "local": "Sala Geral-01",
    "dataRegistro": "2026-09-12",
    "valor": 1500,
    "patrimonio": "PAT-00127"
  }
]
```
* Create Post
* corpo
```JSON
  {
    "id": 3,
    "item": "S21 Ultra",
    "local": "Sala Geral-01",
    "dataRegistro": "2026-09-12",
    "valor": 1500.00,
    "patrimonio": "PAT-00127"
  }
```
* Update PUT
```JSON
[
  {
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-01",
    "valor": 3500,
    "patrimonio": "PAT-00125"
  },
  {
    "id": 2,
    "item": "Galcio",
    "local": "anhanguera",
    "dataRegistro": "2026-09-23",
    "valor": 3800,
    "patrimonio": "PAT-00126"
  },
  {
    "id": 3,
    "item": "S21 Ultra",
    "local": "Sala Geral-01",
    "dataRegistro": "2026-09-12",
    "valor": 1500,
    "patrimonio": "PAT-00127"
  }
]
```
* Delete
```JSON
[
  {
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-01",
    "valor": 3500,
    "patrimonio": "PAT-00125"
  },
  {
    "id": 2,
    "item": "Galcio",
    "local": "anhanguera",
    "dataRegistro": "2026-09-23",
    "valor": 3800,
    "patrimonio": "PAT-00126"
  }
]
```


