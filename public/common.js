var mongoose = require('mongoose');

function mogfn(uri, fn, res) {
    mongoose.Promise = global.Promise;
    mongoose.connect(uri);

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open',fn(res));
}

exports.mogfn = mogfn;