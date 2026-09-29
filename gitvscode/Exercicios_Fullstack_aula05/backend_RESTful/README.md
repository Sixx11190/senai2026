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
Post: http://localhost:3000
Get: http://localhost:3000
Put: http://localhost:3000/id
Delete: http://localhost:3000/id
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
---
<img width="1679" height="549" alt="Captura de tela 2026-09-29 094758" src="https://github.com/user-attachments/assets/e28dd73a-b112-4b26-9731-25013bbe116f" />

<img width="1688" height="648" alt="Captura de tela 2026-09-29 095119" src="https://github.com/user-attachments/assets/f0f52c44-21e4-4ad0-8286-4082e8cd81db" />

<img width="1683" height="638" alt="Captura de tela 2026-09-29 095233" src="https://github.com/user-attachments/assets/5ac24586-0580-4d80-a44e-6b4758c02ebe" />

<img width="1685" height="661" alt="Captura de tela 2026-09-29 095314" src="https://github.com/user-attachments/assets/4b759fe4-cfa7-40ef-bb3d-072c90990a0d" />

<img width="1677" height="667" alt="Captura de tela 2026-09-29 095340" src="https://github.com/user-attachments/assets/25d7e5a0-d977-4139-a481-f2b7288186dc" />

<img width="1693" height="661" alt="Captura de tela 2026-09-29 095401" src="https://github.com/user-attachments/assets/51c16922-940b-45fe-a0a4-d41c201f2811" />

<img width="1680" height="665" alt="Captura de tela 2026-09-29 095412" src="https://github.com/user-attachments/assets/5e906465-7eeb-476f-8396-948a628d2dff" />










