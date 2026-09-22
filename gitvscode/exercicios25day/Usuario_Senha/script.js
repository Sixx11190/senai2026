    const btnEnviar = document.getElementById("btnEnviar"); 

    btnEnviar.addEventListener("click", function (){

    const usuarioc = document.getElementById("usuario").value;
    const senhac = document.getElementById("senha").value;
    const mensagem = document.getElementById("resultado");


    if (usuarioc === "login" && senhac === "123") {
        mensagem.innerText = "login completo, seja bem vindo novamente";
    } else {
        mensagem.innerText = "login recusado";
    }
});