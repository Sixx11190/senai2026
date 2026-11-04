# Azura

Site de moda com cara de gente, feito para quem não quer parecer empresa. A Azura mistura streetwear e estética y2k asiática em uma loja online simples, leve e sem pose.

> Projeto em desenvolvimento (antes chamado Galcio). Hoje é um protótipo de front-end: o login e a compra ainda não têm servidor por trás.

## O que tem no site

- **Cabeçalho flutuante** em formato de pílula, com menu no desktop e menu lateral no celular.
- **Hero com título gigante:** a palavra "AZURA" é recortada e mostra uma foto dentro das letras.
- **Coleções:** cards de produto com foto, preço e botão de compra.
- **Sobre a gente:** seção curta com a história da marca.
- **Login e cadastro** em janela (modal), com abas para alternar entre entrar e criar conta.
- **Assistente virtual** (chat da Voiceflow) disponível na página.
- **PWA:** tem `manifest.json` e `sw.js`, então o site pode ser instalado no celular.

## Estrutura do projeto

```
Azura/
├── Cliente/
│   ├── index.html      # estrutura da página
│   ├── style.css       # todo o visual
│   ├── manifest.json   # configuração do app instalável
│   ├── sw.js           # service worker
│   └── js/
│       └── script.js   # menu lateral e janela de login
├── servidor/
│   └── servidor.js     # reservado para o back-end (ainda vazio)
└── video/
    └── images.jpg
```

## Como rodar

Não precisa instalar nada.

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `Cliente/index.html` e escolha **Open with Live Server**.

Também dá para abrir o `index.html` direto no navegador, mas o service worker só funciona quando o site é servido por `http://localhost` (como no Live Server) ou por `https://`.

## Identidade visual

**Cores** (definidas como variáveis no topo do `style.css`):

| Variável | Cor | Uso |
|---|---|---|
| `--papel` | `#F3E9E6` | fundo da página |
| `--azul` | `#3D5AFE` | cor principal da marca |
| `--ceu` | `#9FD3EC` | destaques e hover |
| `--rosa` | `#FF8FD0` | etiquetas e estrelinha |
| `--tinta` | `#1D1B3A` | textos e botões escuros |
| `--branco` | `#FFFFFF` | molduras e cartões |

**Fontes** (Google Fonts):

- **Anton:** título gigante e títulos de seção
- **Unbounded:** logo "azura" no cabeçalho
- **Zen Maru Gothic:** textos do site
- **DotGothic16:** detalhes em katakana (アズラ)

## Como personalizar

- **Foto dentro das letras do título:** edite a variável `--foto-hero` no `:root` do `style.css`. Fotos horizontais, com o rosto ou elemento principal no centro, funcionam melhor. Para escolher qual parte da foto aparece, ajuste a posição `center 25%` na regra `.titulo-gigante`.
- **Cores:** mude os valores das variáveis no `:root`. O site inteiro acompanha.
- **Produtos:** copie um bloco `.card-produto` no `index.html` e troque a foto, o nome e o preço.
- **Texto da marca:** edite a seção `.sobre` no `index.html`.

## Limitações atuais

- O login e o cadastro são só visuais: os dados digitados não são enviados nem salvos.
- O botão "Comprar" apenas exibe um aviso. Ainda não existe carrinho nem pagamento.
- As fotos dos produtos vêm de links externos e podem sair do ar. O ideal é baixá-las para uma pasta `img/` do projeto.
- A pasta `servidor/` ainda não tem código.

## Próximos passos

- [ ] Carrinho e pagamento
- [ ] Login com back-end de verdade
- [ ] Imagens dos produtos dentro do projeto
- [ ] Página de cada produto

## Direitos

© 2026 Azura. Todos os direitos reservados.
