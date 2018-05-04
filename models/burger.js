var orm = require("./../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    // create: function (cols, vals, cb) {
    //     orm.create("cats", cols, vals, function (res) {
    //         cb(res);
    //     });
    // },
    // The variables cols and vals are arrays.
    insertOne: function (burgerName, cb) {
        orm.insertOne("burgers", ["burger_name"], [burgerName], function (result) {
            cb(result);
        });
    },
    updateOne: function (table, colName, value, id, cb) {
        orm.updateOne("burgers", colName, value, id, function (res) {
            cb(res);
        });
    },

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;