require('dotenv').config();
const express = require('express');
const cors = require('cors')
const mysql = require('mysql2');

const app = express();

// Configura o Express para entender JSON nas requisições
app.use(express.json());
app.use(cors())

// Criando a conexão com o banco de dados usando as variáveis do .env
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Testando a conexão
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL com sucesso!');
});

// Rota de teste
app.get('/api/status', (req, res) => {
    db.query('SELECT 1', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Servidor conectado e banco de dados respondendo!', results });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Rota para cadastrar o usuário no banco de dados
app.post('/api/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;

    // Validação simples
    if (!nome || !email || !senha) {
        return res.status(400).json({ success: false, message: 'Preencha todos os campos!' });
    }

    const query = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
    
    db.query(query, [nome, email, senha], (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar:', err);
            return res.status(500).json({ success: false, message: 'Erro no servidor ao cadastrar.' });
        }
        res.json({ success: true, message: 'Usuário cadastrado com sucesso!' });
    });
});

// Rota para fazer login
app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ success: false, message: 'Preencha o e-mail e a senha!' });
    }

    const query = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';

    db.query(query, [email, senha], (err, results) => {
        if (err) {
            console.error('Erro no login:', err);
            return res.status(500).json({ success: false, message: 'Erro no servidor ao tentar fazer login.' });
        }

        if (results.length > 0) {
            // Usuário encontrado! Retorna os dados básicos dele (exceto a senha por segurança)
            const usuario = {
                id: results[0].id_usuario,
                nome: results[0].nome,
                email: results[0].email
            };
            res.json({ success: true, message: 'Login realizado com sucesso!', usuario });
        } else {
            res.status(401).json({ success: false, message: 'E-mail ou senha incorretos!' });
        }
    });
});