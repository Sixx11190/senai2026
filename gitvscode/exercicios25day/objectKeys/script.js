const usuario = {
    nome: "Pedro",
    email: "pedro@email.com",
    idade: 25,
    cidade: "jaguariuna"
}

const chaves = Object.keys(usuario);

for (let i = 0; i < chaves.length; i++){
    const chave = chaves[i];

    if(chave === "email" || chave === "cidade"){
        console.log(chave + ":" + usuario[chave]);
    }
}