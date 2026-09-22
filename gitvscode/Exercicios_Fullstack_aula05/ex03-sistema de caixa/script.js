
const btnCalculo = document.getElementById("btnCalculo")
const limparConteudo = document.getElementById("clenn")

const subtotal = document.getElementById("subtotal")
const desconto = document.getElementById("desconto")
const total = document.getElementById("total")

btnCalculo.addEventListener("click", function(){

const precoProduto = Number(document.getElementById("preco").value)
const qtdProduto = Number(document.getElementById("qtd").value)
const pagamentoP = document.getElementById("fp")

if (precoProduto === "" || (isNaN(qtdProduto)) || (isNaN(pagamentoP))){
    alert("preencha todos os campos")

    return
}

subtotal = precoProduto * qtdProduto

if (precoProduto = Dinheiro){
    (desconto = qtdProduto / 0.01)
}else if (precoProduto = Pix){
    (desconto = qtdProduto / 0.005)
}else{
    (desconto = qtdProduto / 0)
}

resultado = (desconto + subtotal) / 2 

subtotal.textContent = `Subtotal ${subtotal}`
desconto.textContent = `Desconto ${desconto}`
total.textContent = `Total ${total}`



})

