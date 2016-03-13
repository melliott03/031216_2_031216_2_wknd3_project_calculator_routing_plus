
var express = require("express");
var router = express.Router();
var path = require("path");


router.post("/", function(req,res){
    console.log('hello from math.js');
    console.log(req.body);
    res.send({name: 'foo'});
});




module.exports = router;
