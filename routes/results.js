var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Result = require('../models/result'); 


/* GET users listing. */

router.get('/', function(req, res, next) {
    Result.find().then(function(doc) {
        res.send(doc);
    })
    
});

module.exports = router;