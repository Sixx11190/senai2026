const Enviar = document.querySelector("#btnEnviar");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem")
 
Enviar.addEventListener('click', () => {

if (usuario.value === "Bistecone" && btoa(senha.value) === "MTMwMjEzMzc=") {
    window.location.href = "inicial.html";

} else {
    alert("tente novamente");
}

});

