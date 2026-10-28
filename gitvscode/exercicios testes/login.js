const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (event){
    event.preventDefault(); //Resetando as funções padrões do navegador

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    if (usuario === "vendedor" && senha === "senha123") {
        window.location.href = "cadastro.html";
    } else {
        mensagemErro.textContent = "Usuário ou senha incorretas, try again"
    }
})
