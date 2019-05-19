var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "Chloe@85",
    database: "burgers_db"
});

connection.connect(function(err){

    if(err) {
        console.log("error connecting: " + err.stack);
        return;
    }

    console.log("connection as id" + connection.threadId);
});

module.exports = connection;