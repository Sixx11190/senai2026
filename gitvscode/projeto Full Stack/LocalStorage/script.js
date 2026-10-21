function Salvar(){
    const nome = document.getElementById("nome").ariaValueMax;

    if(!nome){
        alert("Digite um nome antes");
        return;
    }

    //criar uma chave unica
    const chave = "nome_" + Date.now();

    localStorage.setItem(chave, nome);

    document.getElementById("nome").value = "";

    document.getElementById("resultado").textContent = "Nome salvo" + nome;

    listarNomes();
}

//Listar todos os nomes Salvos:
function listarNomes(){
    const nomes = []

    for(let i = 0; localStorage.length; i++){
        //key = retor a chave que está naquela posição;
        const chave = localStorage.key(i)

        if (chave.startsWith("nome_")){
            nomes.push({
            chave: chave,
            valor: localStorage.getItem(chave)
        })
    }
}

        const resultado = document.getElementById("resultado");

        if (nomes.length === 0){
            resultado.textContent = "Nenhum nome salvo";
            return;
        }

        const titulo = document.createElement("h2");

        titulo.textContent = "nomes salvos: " + nomes.length;

        const lista = document.createElement("ul");

        nomes.forEach(function(item){
            const li = document.createElement("li");
            li.textContent = item.valor + " ";

            const botao = document.createElement("button")
            botao.className = "apagar"
            botao.textContent = "Excluir";

            botao.onclick = function() {
                localStorage.removeItem(item.chave);
                listarNomes();
            };

            li.appendChild(botao);
            lista.appendChild(li);
        });

        resultado.replaceChild(titulo, lista)
}