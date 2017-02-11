var mongoose = require('mongoose');
var person = require('./person').person();
var searchPerson = function (res) {
    return function () {

        person.find({}).exec(function (err, docs) {
            if(err) throw err;

            docs.forEach(function (doc) {
                console.log(
                    'In the ' + doc['name'] + ', '
                );
            });
            require('./closeMongoose').close();
            res.render('gift/total', {data: docs});

        })
    }

};

exports.searchPerson = searchPerson;