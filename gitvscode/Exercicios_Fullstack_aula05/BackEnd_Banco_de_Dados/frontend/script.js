const BASE_URL = 'http://localhost:3000';

const formCadastro = document.querySelector("#cadastro");

async function listarUsuarios() {
    const resposta = await fetch(`${BASE_URL}/usuario/listar`);
    
    if (resposta.status == 200) {
    const listaUsuarios = await resposta.json();

        const tbody = document.querySelector("tbody");

        listaUsuarios.forEach((usuario) => {
            const linha = document.createElement("tr");

            const colunas = `
            <td>${usuario.id}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.cpf}</td>
            <td>${usuario.email}</td>
        `;

            linha.innerHTML = colunas;
            tbody.appendChild(linha);
        });
    } else if(resposta.status == 500) {
        console.error("Erro ao listar usuários");
    }
        console.log(resposta);
}; 

formCadastro.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const cpf = document.querySelector("#cpf").value;
    const email = document.querySelector("#email").value;

    const usuario = {
        nome,
        cpf,
        email
    };

    console.log(usuario);
});

listarUsuarios();