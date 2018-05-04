// var express = require("express");

// yay


var burger = require("../models/burger.js");

// var router = express.Router();

module.exports = function (app) {

    app.get("/", function (req, res) {
        burger.selectAll(function (data) {
            var hbsObject = {
                burgers: data
            };
            console.log(hbsObject);
            // res.render("index", hbsObject);
            res.render("index", {
                burgers: data
            });
        });
    });



    app.post("/api/burgers/new", function (req, res) {
        burger.insertOne(
            req.body.burger,
            function (result) {
                // Send back the ID of the new quote
                console.log(result);
                res.redirect("/");
            });
    });

    app.put("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);

        burger.updateOne({
            devoured: req.body.devoured
        }, condition, function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
    app.delete("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        cat.delete(condition, function (result) {
            if (result.affectedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
}