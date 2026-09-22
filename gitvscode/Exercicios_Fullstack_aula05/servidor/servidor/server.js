const express = require("express");
const pedidos = require("../dados.json");

const mostrarPedido = (req, res) =>{
    calcSubtotais();
    res.send(pedidos);
}

const calcSubtotais = (req, res) => {
    pedidos.forEach(p => {
        p.subtotal = p.precoUnitario * p.quantidade;
    })
} 

const novoPedido = (req, res) => {
    if (req.body) {
        res.send("sucessowww!");
        pedidos.push(req.body);
    }else {
        res.send("errowww!");
    }
}

const excluirPedido = (req, res) => {
    const id = req.params.id;

    pedidos.forEach((pedido, indice) => {
        if (pedido.id == id) {
            pedidos.splice(indice, 1);
        }
    });

    res.send("Pedido excluído com sucesso!");
};

const alterarPedido = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    pedidos.forEach((pedido) => {
        if (pedido.id == id){
            pedido.nome = dados.nome;
            pedido.precoUnitario = dados.precoUnitario;
            pedido.quantidade = dados.quantidade;
            pedido.unidade = dados.unidade;
        }
    });
    res.send("Pedido alterado com sucesso!");
};

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const porta = 3000;

app.get("/", mostrarPedido);
app.post("/", novoPedido);
app.delete("/:id", excluirPedido);
app.put("/:id", alterarPedido);

app.listen(porta, () => {
    console.log(`servidor: http://localhost:${porta}`);
});
