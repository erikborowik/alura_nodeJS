var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'borowik',
        database: 'payfast'
    });
}

module.exports = function () {
    return createDBConnection;
}