// app/models/car.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define our car model
// module.exports allows us to pass this to other files when it is called
var CarSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Car', CarSchema);