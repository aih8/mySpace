var mongoose = require('mongoose');


exports.person = function () {
    // Create psrson schema
    var Schema = mongoose.Schema({
        name: String,
        arr: Array,
        description: Object
    });

// Store psrson documents in a collection called "psrsons"
    var person = mongoose.model('psrsons', Schema);
    return person;
};