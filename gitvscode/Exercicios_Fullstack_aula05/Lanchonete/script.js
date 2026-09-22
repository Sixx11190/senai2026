const calcular = document.getElementById('calcular');

calcular.addEventListener('click', function() {
    const lanche = document.getElementById("lanche").value;
    const quantidade = Number(document.getElementById("qtd").value);
    const bebida = document.getElementById('bebida').value;

    let valorTotal = parseFloat(bebida) + (parseFloat(lanche) * parseInt(quantidade));

    const nome = document.getElementById('nome').value;
    document.getElementById("nomeCliente").innerText = `Cliente: ${nome}`;

    if (valorTotal >= 50) {
       let desconto = valorTotal * 0.1;
       valorTotal -= desconto;
       document.getElementById("total").innerText = valorTotal;
    }else{
         document.getElementById("total").innerText = valorTotal;
    }
    const desconto = valorTotal >= 50 ? valorTotal * 0.1 : 0;
    document.getElementById("desconto").innerText = `Desconto: R$ ${desconto.toFixed(2)}`;

    const subtotal = valorTotal - desconto;
    document.getElementById("subtotal").innerText = `Subtotal: R$ ${subtotal.toFixed(2)}`;

    qtd2.textecontent = `Quantidade: ${quantidade}`;
});