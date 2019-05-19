var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.all(function(data) {
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});