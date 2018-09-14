//MySQL connection.

var mysql = require('mysql');

//connection to MySQL DB.  Password will be removed before uploading.
var connection = mysql.createConnection({
    
    host: "localhost",
    user: "root",
    password: "fogari",
    database: "burgers_db"
});


//establishing a connection to the database and confirming connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stac);
        return;
    }
    console.log("connected as id   " + connection.threadId);
});

//Export connection for ORM to use.
module.exports = connection;
