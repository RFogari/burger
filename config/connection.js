//MySQL connection.

var mysql = require('mysql');

//creating a connection to JAWSDB URL
if (process.env.JAWSDB_URL) {
    
    var connection = mysql.createConnection(process.env.JAWSDB_URL)

} else {
        //connection for running locally
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'fogari',
            database: 'burgers_db'
        });
    }



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
