
function calcular(){
let preco = Number(document.getElementById("preco").value)
let quantidade = Number(document.getElementById("quantidade").value)
let pagamento = Number(document.getElementById("pagamento").value)
let valorRecebido = Number(document.getElementById("valorRecebido").value)

let nomePagamento;

let subtotal = preco * quantidade;

let quantidadeDesconto = 0;

if (pagamento === 1){
quantidadeDesconto = 10;
nomePagamento = "Dinheiro"
} else if (pagamento === 2){
quantidadeDesconto = 5;
nomePagamento = "Pix"
} else {
quantidadeDesconto = 0;
nomePagamento = "Cartão"
}

let valorDesconto = subtotal * (quantidadeDesconto / 100);

let total = subtotal - valorDesconto;

let mensagem =
"subtotal: R$ " + subtotal.toFixed(2) +
"<br>Desconto: R$ " + valorDesconto.toFixed(2) +
"<br>Total: R$ " + total.toFixed(2) +
"<br>Pagamento: " + nomePagamento;

//Se for dinheiro, precisa calcular o troco

if (pagamento === 1){
if (valorRecebido >= total) {
let troco = valorRecebido - total;
mensagem += "<br>Valor Recebido: R$" + valorRecebido.toFixed(2);
mensagem += "<br>Troco: R$" + troco.toFixed(2);
} else {
mensagem += "<br>Valor recebido insuficiente.";
}
}
document.getElementById("resultado").innerHTML = mensagem;
}
