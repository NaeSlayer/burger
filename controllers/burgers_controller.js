var express = require("express");
var burgers = require("./../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    res.send("Please specify your route to recieve data.")
});

module.exports = router;