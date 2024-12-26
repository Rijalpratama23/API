const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Sesuaikan dengan Username mysql
    password: '', // Sesuaikan dengan Password mysql
    database: 'mahasiswa3',
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL database:', err);
    }else {
        console.log('Connected to MySQL database');
    }
});

module.exports = connection;