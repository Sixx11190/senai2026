const express = require("express")
const consulta = require("../dados.json")

const mostrarConsultas = (req, res) => {
    calcularimc()
    res.send(consulta)
}

const novaConsulta = (req, res) => {
    if(req.body){
        consulta.push(req.body)
        calcularimc()
        res.send("Consulta agendada, aguarde")
    }else{
        res.send("Error: Consulta não agendada, tente novamente")
    }
}

const calcularimc = () => {
    consulta.forEach(p => {
        if (p.altura && p.peso){
        p.imc = p.peso / ((p.altura / 100) ** 2)
        }
    })
}

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const porta = 3000

app.post("/", novaConsulta)
app.get("/", mostrarConsultas)

app.listen(porta, () => {
    console.log(`servidor: http://127.0.0.1:${porta}`)
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`)
})