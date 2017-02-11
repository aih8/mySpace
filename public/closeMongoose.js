var mongoose = require('mongoose');
function close() {
    mongoose.connection.db.close(function (err) {
        if(err) throw err;
    });
}
exports.close = close;
