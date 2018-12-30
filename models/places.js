let mongoose = require('mongoose');

var placesSchema = mongoose.Schema({
    
    cityName: {type: String, required: true},
    cityGoogleID: {type: String, required: true},
    placeName: {type: String, required: true},
    placeDescription: {type: String, required: true},
    placePrice: {type: Number, required: false},
    placeCurrency: {type: String, required: false},
    placeID: {type: String, required: true},
    placePhotos: {type: String, required: false},
    placeUser: {type: String, required: true},
    placeMap: {type: String, required: false}
})

module.exports = mongoose.model('Places', placesSchema);