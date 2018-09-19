// importing MySQL connection.

var connection = require("../config/connection");

//for loop to create question marks which will be used later for MySQL queries
function questionMarks(num) {
    var arr = [];

    for(var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}



function objToSql(ob) {
    var arr = [];

    for(var key in ob) {
        var value = ob[key];

        if(Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string"  && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        };
    };

    return arr.toString();
}


//object fo all SQL statement functions
var orm = {

    //Query to display all the burgers in the table.

    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
         
            cb(result);
        });
    },

    //Query for inserting a new burger into the table

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    //Query for updating status of burger = e.g. devoured
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;


        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    }

};

//export the orm object for the burger model.
module.exports = orm;
