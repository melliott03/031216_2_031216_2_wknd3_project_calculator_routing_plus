
var express = require("express");
var router = express.Router();
var path = require("path");


router.post("/", function(req,res){
    var answer = eval(req.body.inputItems);
    // math.eval('sin(45 deg) ^ 2');
    console.log('hello from math.js');
    console.log(req.body);
    res.send({ans: ''+answer});
});




module.exports = router;
