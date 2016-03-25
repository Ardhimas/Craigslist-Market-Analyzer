// app/models/car.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our car model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Car', {
    name : {type : String, default: ''}
});