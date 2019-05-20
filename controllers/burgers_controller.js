var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        req.body.devoured,
        condition,
        function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(
        req.body.burger_name, req.body.devoured,
        function (result) {
            // Send back the ID of the new quote
            res.json(result);
        });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = req.params.id;
  
    burger.deleteOne(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;