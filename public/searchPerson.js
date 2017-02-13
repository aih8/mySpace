var mongoose = require('mongoose');
var person = require('./person').person;
var searchPerson = function (req, res) {
    return function () {
        console.log(req.query);
        person.find({}).exec(function (err, docs) {
            if(err) throw err;

            docs.forEach(function (doc) {
                doc.sum = 0;
                doc.arr.forEach(function (v, i ,a) {
                    doc.sum += parseInt(v.amount);
                })
            });
            require('./closeMongoose').close();
            res.render('gift/total', {data: docs});

        })
    }

};

exports.searchPerson = searchPerson;