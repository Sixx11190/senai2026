const express = require("express");
const cadastro = require("../dados.json");

const mostrarAlunos = (req, res) => {
    calcularMedia();
    res.send(cadastro);
};

const novoAluno = (req, res) => {
    if (req.body) {
        cadastro.push(req.body);
        res.send("Aluno cadastrado, em espera...");
    } else {
        res.send("Error 422: Aluno não cadastrado, tente novamente mais tarde");
    }
};

const calcularMedia = () => {
    cadastro.forEach(p => {
        p.media = (parseFloat(p.notaum) + parseFloat(p.notadois) + parseFloat(p.notatres))/3;
    });
};

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const porta = 3000;

app.post("/", novoAluno);
app.get("/", mostrarAlunos);
app.post("/media", calcularMedia)

app.listen(porta, () => {
    console.log(`servidor: http://127.0.0.1:${porta}`);
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`);
});