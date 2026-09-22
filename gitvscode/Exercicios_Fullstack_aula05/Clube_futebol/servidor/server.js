const express = require("express")
const times = require("../dados.json")

const mostrarTimes = (req, res) => {
    calcularPontos
    res.send(times)
}

const novoTime = (req, res) => {
    if(req.body){
        res.send("cadastro completo")
        times.push(req.body)
    }else{
        res.send("não concluido")
    }
}

const calcularPontos = (req, res) => {
    times.forEach(p => {
        p.pontos = (p.vitorias * 3) + p.empates
    })
}

const app = express()
app.use(express.urlencoded({extended: true}))
const porta = 3000;

app.get("/", mostrarTimes)
app.post("/", novoTime)
app.post("/pontos", calcularPontos)

app.listen(porta, () => {
    console.log(`servidor: http://127.0.0.1:${porta}`)
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`)
})