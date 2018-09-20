//MySQL connection.

var mysql = require('mysql');
var dotenv = require('dotenv');


//connection to MySQL DB.  Password will be removed before uploading.
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
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
