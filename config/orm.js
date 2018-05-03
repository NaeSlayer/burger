var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
        });

    },

    insertOne: function (table, colName, value) {
        console.log("The insertOne function did a thing")

        var queryString = "INSERT INTO ?? (??, devoured) VALUES (?, false)";
        connection.query(queryString, [table, colName, value], function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    },

    updateOne: function (table, colName, value, id) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, colName, value, id], function (err, result) {
            if (err) throw err;
            console.log(result);
        })

    }

};

module.exports = orm;