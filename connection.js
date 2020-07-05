require('dotenv').config();
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});
console.log(connection)
connection.connect((err) => {
    if (!err) {
        console.log('Connected');
    } else {
        console.log('Connection Failed')
    }
})

module.exports = connection;