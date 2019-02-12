let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Places = require('../models/places');

/* GET home page. */
router.get('/', function(req, res, next) {
          res.render('index', { title: 'Miasto: ', box: 'Google ID miasta: ' });
                });  

module.exports = router;