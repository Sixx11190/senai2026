# Documentação — Projeto MVC

## 1. Introdução

Este projeto foi desenvolvido utilizando o padrão de arquitetura **MVC (Model-View-Controller)**, aplicado a uma API desenvolvida com **Node.js**.

O objetivo principal do projeto é organizar uma aplicação responsável pelo gerenciamento de dados relacionados a **clientes, produtos, itens e pedidos**, disponibilizando esses dados através de rotas HTTP.

Os dados utilizados pela aplicação são armazenados inicialmente em arquivos no formato **JSON**, enquanto os arquivos JavaScript presentes na pasta `controllers` são responsáveis pelo tratamento das requisições.

A API é executada localmente através do servidor:

```text
http://localhost:3000
```

---

# 2. Estrutura do projeto

A estrutura principal do projeto é:

```text
MVC/
│
├── dados/
│   ├── clientes.json
│   ├── itens.json
│   ├── pedidos.json
│   └── produtos.json
│
├── node_modules/
│
├── src/
│   └── controllers/
│       ├── cliente.js
│       ├── itens.js
│       ├── pedido.js
│       ├── produtos.js
│       └── routes.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

Cada parte possui uma função específica dentro da aplicação.

---

# 3. Arquitetura MVC

MVC significa:

* **M — Model (Modelo)**
* **V — View (Visualização)**
* **C — Controller (Controlador)**

Essa arquitetura tem como objetivo separar as responsabilidades da aplicação, facilitando a organização e manutenção do código.

Neste projeto, a aplicação é uma API, portanto não existe uma interface gráfica tradicional dentro da estrutura apresentada. A comunicação ocorre principalmente através de requisições HTTP e respostas em formato JSON.

---

# 4. Pasta `dados`

A pasta `dados` contém os arquivos JSON utilizados como fonte de dados da aplicação.

## `clientes.json`

Armazena os dados relacionados aos clientes cadastrados no sistema.

Exemplo de utilização:

```text
clientes → informações dos clientes
```

## `itens.json`

Armazena informações relacionadas aos itens utilizados nos pedidos.

## `pedidos.json`

Armazena os dados referentes aos pedidos realizados.

## `produtos.json`

Armazena os produtos disponíveis no sistema.

Durante os testes da API, a rota:

```text
GET /produtos
```

retorna os dados armazenados em `produtos.json`.

---

# 5. Pasta `src`

A pasta `src` concentra o código-fonte principal da aplicação.

Dentro dela está a pasta:

```text
src/controllers/
```

que contém os controladores responsáveis pelo tratamento das requisições.

---

# 6. Controllers

Os controllers são responsáveis por receber as requisições feitas à API e executar a lógica necessária para responder a essas requisições.

## `cliente.js`

Responsável pelas operações relacionadas aos clientes.

As requisições relacionadas aos clientes são direcionadas para este controller.

---

## `itens.js`

Responsável pelo tratamento das operações relacionadas aos itens.

---

## `pedido.js`

Responsável pelas operações relacionadas aos pedidos.

---

## `produtos.js`

Responsável pelo tratamento das operações relacionadas aos produtos.

Um exemplo de requisição realizada durante o desenvolvimento foi:

```http
GET http://localhost:3000/produtos
```

A resposta retornada pela API possui o formato JSON.

Exemplo observado durante o teste:

```json
[
  {
    "id": 1,
    "nome": "Chia",
    "preco": 30
  },
  {
    "id": 2,
    "nome": "Chia",
    "preco": 30
  }
]
```

Isso demonstra que a rota de produtos está funcionando e retornando os dados para o cliente da API.

---

## `routes.js`

O arquivo `routes.js` é responsável pela definição e organização das **rotas da aplicação**.

As rotas determinam quais endereços da API podem ser acessados e qual controller deve tratar cada requisição.

Um exemplo é:

```text
GET /produtos
```

que direciona uma requisição para o gerenciamento dos produtos.

---

# 7. `server.js`

O arquivo `server.js` é responsável pela inicialização do servidor da aplicação.

É através dele que a API é colocada em execução.

Durante o desenvolvimento, o servidor apresentou a seguinte mensagem:

```text
Servidor rodando na porta: http://localhost:3000
```

Isso indica que a aplicação está sendo executada na porta `3000`.

O endereço base da API é:

```text
http://localhost:3000
```

---

# 8. `package.json`

O arquivo `package.json` contém as informações e configurações do projeto Node.js.

Entre suas funções estão:

* identificação do projeto;
* gerenciamento de dependências;
* definição de scripts;
* configuração do projeto.

As dependências utilizadas pela aplicação são instaladas dentro da pasta:

```text
node_modules/
```

---

# 9. `package-lock.json`

O arquivo `package-lock.json` registra as versões específicas das dependências instaladas no projeto.

Ele ajuda a garantir que a instalação das dependências seja reproduzida de maneira consistente em diferentes computadores.

---

# 10. `.gitignore`

O arquivo `.gitignore` determina quais arquivos e pastas não devem ser enviados para o controle de versão do Git.

Um exemplo comum em projetos Node.js é ignorar:

```text
node_modules/
```

Isso evita que uma grande quantidade de arquivos das dependências seja adicionada ao repositório.

---

# 11. Funcionamento da aplicação

De maneira simplificada, o funcionamento da aplicação ocorre da seguinte forma:

```text
Cliente
   │
   │ Requisição HTTP
   ▼
Routes
   │
   │ direciona a requisição
   ▼
Controller
   │
   │ acessa/processa os dados
   ▼
Arquivo JSON
   │
   │ dados
   ▼
Controller
   │
   │ resposta
   ▼
Cliente
```

Por exemplo, quando uma requisição é feita para:

```text
GET /produtos
```

a aplicação identifica a rota, direciona a requisição para o controller responsável pelos produtos e retorna os dados em formato JSON.

---

# 12. Testando a API

Com o servidor em execução, é possível realizar requisições utilizando ferramentas de teste de API.

Por exemplo:

```http
GET http://localhost:3000/produtos
```

Caso a rota esteja funcionando corretamente, a API retorna uma resposta com status:

```text
200 OK
```

O código HTTP `200` indica que a requisição foi processada com sucesso.

---

# 13. Tecnologias utilizadas

O projeto utiliza principalmente:

* **JavaScript**
* **Node.js**
* **API REST**

* **JSON**
* **HTTP**
* **Arquitetura MVC**
* **Git/GitHub**

---

# 14. Conclusão

O projeto demonstra a utilização do padrão **MVC** na construção de uma API utilizando Node.js.

A separação dos arquivos permite organizar melhor as responsabilidades da aplicação, mantendo os dados separados dos controllers e das configurações do servidor.

Os arquivos JSON funcionam como fonte de dados, os controllers realizam o processamento das requisições e as rotas definem os caminhos disponíveis para acesso à API.

Durante os testes, a rota:

```text
GET /produtos
```

foi executada com sucesso, retornando os produtos em formato JSON através do servidor localizado em:

```text
http://localhost:3000
```

Essa estrutura serve como base para a criação de aplicações maiores e facilita futuras alterações e manutenção do projeto.

---

<img width="1919" height="1036" alt="Captura de tela 2026-10-07 111814" src="https://github.com/user-attachments/assets/af3909b5-d837-45ef-a83b-5d71904d0981" />
