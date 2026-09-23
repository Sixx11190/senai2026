const express = require("express");
const registros = require("../dados.json");

const mostrarItens = (req, res) => {
    res.send(registros);
}

const novoItem = (req, res) => {
    if (req.body) {
        res.send("Item add successfully!");
        registros.push(req.body);
    } else {
        res.send("Error adding item!");
    }
}

const excluirItem = (req, res) => {
    const id = req.params.id;

    registros.forEach((item, indice) => {
        if (item.id == id){
            registros.splice(indice, 1);
        }
    });
    res.send("Item deleted successfully!");
}

const alterarItem = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    registros.forEach((item) => {
        if (item.id == id){
            item.item = dados.item;
            item.local = dados.local;
            item.dataRegistro = dados.dataRegistro;
            item.valor = dados.valor;
            item.patrimonio = dados.patrimonio;
        }
    });
    res.send("Item updated successfully!");
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const porta = 3000;

app.get("/", mostrarItens);
app.post("/", novoItem);
app.delete("/:id", excluirItem);
app.put("/:id", alterarItem);

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});

