let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Places = require('../models/places');

/* GET home page. */
router.get('/', function(req, res, next) {
    
 
    
    //
            Places.find({cityGoogleID: '0003' }).then(function(doc){
                let sum = [];
                let i = 0;
                console.log(doc);
                for (let docs in doc) {
                    sum[i] = '<h3>' + doc[docs].placeName + '</h3>' + '<p>Lokalizacja: ' + doc[docs].cityName + '</p>' + '<p>Cena: ' + doc[docs].placePrice + ' ' + doc[docs].placeCurrency + '</p>';
                    i++;
                    }
            
                res.render('index', { title: 'Miasto: ', box: 'Google ID miasta: ', result: sum });
                })  
   
});
    
module.exports = router;
