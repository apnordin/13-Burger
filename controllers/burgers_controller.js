var express = require("express")

var router = express.Router();

//Import the burger model to use its database functions
var burger = require("../models/burger.js");


//All Routes and Logic:

//Get
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Post

// Put


module.exports = router;