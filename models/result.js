var mongoose = require('mongoose');

var resultSchema = mongoose.Schema({
    name: String,
    city: String
});

module.exports = mongoose.model('Result', resultSchema);