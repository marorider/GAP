var mongoose = require('mongoose');

var placesDbSchema =  mongoose.Schema({
    placeName: {type: String, required: true},
    placeDescription: {type: String, required: true},
    placePrice: {type: Number, required: false},
    placeCurrency: {type: String, required: false},
    placePlace_ID: {type: String, required: true},
    placeCityName: {type: String, required: true},
    placePhotos: {type: String, required: false},
    placeUser: {type: String, required: true},
    placeMap: {type: String, required: false}
    
});

var citiesDbSchema = mongoose.Schema({
    cityName: {type: String, required: true},
    cityPlace_ID: {type: String, required: true},
    cityPlaces: [placesDbSchema]
});

module.exports = mongoose.model('CitiesDb', citiesDbSchema);