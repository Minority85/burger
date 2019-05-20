var connection = require("./connection");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(table, devoured, id, cb) {
        var queryString = "UPDATE " + table + " SET devoured = " + devoured + " WHERE id = ?"
    
        console.log(queryString);
        connection.query(queryString, id, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },
    insertOne: function(table, burger_name, devoured, cb) {
        var queryString = "INSERT INTO " + table + "(burger_name, devoured) VALUES (?,?)"

        connection.query(queryString, [burger_name, devoured], function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        })
    },
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table + " WHERE id=?";
    
        connection.query(queryString, condition, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
};

module.exports = orm;