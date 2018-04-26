var orm = require("./../config/orm.js");

orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name", "Double Bacon Cheeseburger");

orm.updateOne("burgers", "burger_name", "SouthwesternBurger", 2);


module.exports = burgers;