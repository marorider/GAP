let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Result = require('../models/result'); 
let Places = require('../models/places');

/* GET users listing. */

router.get('/', function(req, res, next) {
   
    
    let val = req.query.search;
    Places.find({cityGoogleID: val }).then(function(doc){
        let sum = [];
        let i = 0;
        console.log(doc);
        for (let docs in doc) {
            sum[i] = '<h3>' + doc[docs].placeName + '</h3>' + '<p>Lokalizacja: ' + doc[docs].cityName + '</p>' + '<p>Cena: ' + doc[docs].placePrice + ' ' + doc[docs].placeCurrency + '</p>';
            i++;
            }
        res.render('result', {result: sum});
                    
        });

});

module.exports = router;