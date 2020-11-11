const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'aula'
});

connection.query(
    'SELECT * FROM pessoa',
    function (err, results, fields) {
        console.log(results);
    }
);

connection.query(
    'SELECT * FROM endereco',
    function (err, results, fields) {
        console.log(results);
    }
);

connection.query(
    'SELECT * FROM cliente',
    function (err, results, fields) {
        console.log(results);
    }
);

connection.query(
    'SELECT * FROM fornecedor',
    function (err, results, fields) {
        console.log(results);
    }
);