var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: process.env.CLIENT_USER,
    password: process.env.CLIENT_SECRET,
    database: "autotracker"
});

module.exports = conn;