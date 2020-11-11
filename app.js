const express = require('express')
const app = express()
const port = 4000

app.get('/', function (req, res) {
    res.send('Pet Shop')
})

app.listen(port, () => {

    class Endereco {
        constructor(rua, numero, cep, cidade, estado) {
            this.rua = rua;
            this.numero = numero;
            this.cep = cep;
            this.cidade = cidade;
            this.estado = estado;
        }
    }

    class Pessoa {
        constructor(nome, email, telefone) {
            this.nome = nome;
            this.email = email;
            this.telefone = telefone;
        }

        getNome() {
            return `${this.nome}`
        }
        getEmail() {
            return `${this.email}`
        }
        getTelefone() {
            return `${this.telefone}`
        }
    }

    class Cliente extends Pessoa {
        constructor(nome, email, telefone, cpf) {
            if (cpf === undefined)
                throw new Error('Faltou o CPF')
            super(nome, email, telefone)
            this.nome = nome;
            this.email = email;
            this.cpf = cpf;
            this.telefone = telefone;
        }

        getNome() {
            return `${this.nome}`
        }

        getEmail() {
            return `${this.email}`
        }

        getCpf() {
            return `${this.cpf}`
        }

        getTelefone() {
            return `${this.telefone}`
        }
    }

    class Fornecedor extends Pessoa {
        constructor(nome, email, telefone, cnpj) {
            if (cnpj === undefined)
                throw new Error('Faltou o CNPJ')
            super(nome, email, telefone)
            this.nome = nome;
            this.email = email;
            this.cnpj = cnpj;
            this.telefone = telefone;
        }

        getNome() {
            return `${this.nome}`
        }

        getEmail() {
            return `${this.email}`
        }

        getCnpj() {
            return `${this.cnpj}`
        }

        getTelefone() {
            return `${this.telefone}`
        }
    }

    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'aula'
    });

    //Read
    connection.query(
        'SELECT * FROM pessoa',
        function (err, results, fields) {
            //console.log(results);
            const pessoas = [];
            results.forEach(data => {
                pessoas.push(new Pessoa(data.nome, data.email, data.telefone))
            })
            console.log(pessoas);
        }
    );

    //Insert
    connection.query(
        'INSERT INTO Pessoa (nome, email, telefone) VALUES ("Renan", "renan@gmail.com", "123456789")',
        function (err, results, fields) {
            console.log(results);
        }
    );

    //Update
    connection.query(
        'UPDATE Pessoa SET nome = "João" where id=2',
        function (err, results, fields) {
            console.log(results);
        }
    );

    //Delete
    connection.query(
        'DELETE FROM Pessoa WHERE id=2',
        function (err, results, fields) {
            console.log(results);
        }
    );

    connection.query(
        'SELECT * FROM endereco',
        function (err, results, fields) {
            //console.log(results);
            const enderecos = [];
            results.forEach(data => {
                enderecos.push(new Endereco(data.rua, data.cep, data.numero, data.cidade, data.estado))
            })
            console.log(enderecos);
        }
    );

    connection.query(
        'SELECT * FROM cliente',
        function (err, results, fields) {
            //console.log(results);
            const clientes = [];
            results.forEach(data => {
                clientes.push(new Cliente(data.cpf))
            })
            console.log(clientes);
        }
    );

    connection.query(
        'SELECT * FROM fornecedor',
        function (err, results, fields) {
            //console.log(results);
            const fornecedores = [];
            results.forEach(data => {
                fornecedores.push(new Cliente(data.cnpj))
            })
            console.log(fornecedores);
        }
    );

    // var longhini = new Cliente('Longhini', 'longs@gmail.com', '4498847-3908 ', '07659632584')
    // var catClub = new Fornecedor('CatClub', 'catclub@gmail.com', '3312247-3308 ', '1234456-1')

    // console.log(longhini);
    // console.log(catClub);

})
