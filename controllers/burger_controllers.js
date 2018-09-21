var express = require("express");

var router = express.Router();

//importing the burger.js model for the database functions
var burger = require("../models/burger");


//routes for the buger demo

router.get('/', function(req, res) {
    res.redirect('/burgers')
});


//first route to get all burgers
router.get('/burgers', function(req, res) {

    burger.selectAll(function(data) {
        
        var hbsObject = {

            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

//route to add a burger
router.post("/api/burgers", function(req, res) {
    burger.insertOne(
    [
        "burger_name"
    ],
    [
        req.body.burger_name
    ],
        function(result) {
        res.redirect('/');
    });
});

//route to update burger status to devoured
router.put("/api/burgers/:id", function(req, res) {

  var condition = "id = " + req.params.id;



    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: true
        },

    condition, function(result) {

        res.redirect('/');
    });


});



module.exports = router;
