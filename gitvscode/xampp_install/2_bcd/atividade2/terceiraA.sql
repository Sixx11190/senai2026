CREATE DATABASE biblioteca;

USE bliblioteca;

CREATE TABLE a_alunos (
    id_alunos INT PRIMARY KEY AUTO_INCREMENT,
    nome_alunos VARCHAR(100) NOT NULL,
    email_alunos VARCHAR(100) NOT NULL,
    curso VARCHAR(100) NOT NULL
);

CREATE TABLE a_livros (
    id_livros INT PRIMARY KEY AUTO_INCREMENT,
    autor VARCHAR(100) NOT NULL,
    anop DATE NOT NULL,
    titulo VARCHAR(100) NOT NULL
);

CREATE TABLE a_emprestimo (
    id_emprestimo INT PRIMARY KEY AUTO_INCREMENT,
    id_alunos INT NOT NULL,
    id_livros INT NOT NULL,
    dt_entrega DATE NOT NULL,
    dt_devolucao DATE NOT NULL
);

USE biblioteca;

INSERT INTO a_alunos (nome_alunos, email_alunos, curso) VALUES
("Takeo", "takeo@gmail.com", "DS");

INSERT INTO a_alunos (nome_alunos, email_alunos, curso) VALUES
("Julio", "julio@gmail.com", "CyberSegurança");

INSERT INTO a_alunos (nome_alunos, email_alunos, curso) VALUES
("Sayuri", "Sayuri@gmail.com", "Mecatronica");

SELECT * FROM biblioteca;

USE biblioteca;

INSERT INTO a_livros (autor, anop, titulo) VALUES
("VMZ", "2026-09-30", "Opera de Meias");

INSERT INTO a_livros (autor, anop, titulo) VALUES
("Jennie", "2026-10-23", "Move Like Jennie");

INSERT INTO a_livros (autor, anop, titulo) VALUES
("Platão", "2026-11-01", "Insignificancia");

SELECT * FROM biblioteca;

USE biblioteca;

INSERT INTO a_emprestimo (id_alunos, id_livros, dt_entrega, dt_devolucao) VALUES
(1, 1, "2026-09-30", "2026-10-01");

INSERT INTO a_emprestimo (id_alunos, id_livros, dt_entrega, dt_devolucao) VALUES
(3, 2, "2021-07-26", "2021-07-31");

INSERT INTO a_emprestimo (id_alunos, id_livros, dt_entrega, dt_devolucao) VALUES
(2, 3, "2001-02-23", "2001-03-07");

SELECT * FROM biblioteca

USE biblioteca;

ALTER TABLE a_emprestimo
ADD CONSTRAINT fk_a_emprestimo_alunos
FOREIGN KEY (id_aluno) 
REFERENCES a_alunos(id_alunos);

USE biblioteca;

ALTER TABLE a_emprestimo
ADD CONSTRAINT fk_a_emprestimo_livros
FOREIGN KEY (id_livros) 
REFERENCES a_livros(id_livros);

USE biblioteca;

ALTER TABLE a_alunos
ADD CONSTRAINT uk_a_alunos_unico UNIQUE (email_alunos);
