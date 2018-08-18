var express = require("express");

var router = express.Router();

//importing the burger.js model for the database functions
var burger = require("../models/burger");


//routes for the buger demo


//first route to get all burgers
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//route to add a burger
router.post("/", function(req, res) {
    burger.create(
    [
        "burger_name"
    ],
    [
        req.body.burger_name
    ], 
        function() {
        res.redirect("/");
    });
});

//route to update burger status to devoured
router.put("/api/burgers:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            deveoured: true
        },

    condition, function() {
        res.redirect('/');
    });
    

});



module.exports = router;

