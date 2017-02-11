var mongoose = require('mongoose');

function addPerson() {

    console.log(require('./person'));
    var person = require('./person').person();
    // Create seed data
    var one = new person({
        name: '张红明',
        arr: [{
            amount: 1000,
            reason: ""
        }],
        description: {}
    });

    var two = new person({
        name: '史添',
        arr: [{
            amount: 1000,
            reason: ""
        }],
        description: {}
    });

    var three = new person({
        name: '芬姐2',
        arr: [{
            amount: 1000,
            reason: ""
        }]
    });

    /*
     * First we'll add a few persons. Nothing is required to create the
     * persons collection; it is created automatically when we insert.
     */
    var list = [one, two, three];
    person.insertMany(list);

    /*
     * Then we need to give Boyz II Men credit for their contribution
     * to the hit "One Sweet Day".
     */
    person.update({ person: 'One Sweet Day'}, { $set: { artist: 'Mariah Carey ft. Boyz II Men'} },
        function (err, numberAffected, raw) {

            if (err) return handleError(err);

            /*
             * Finally we run a query which returns all the hits that spend 10 or
             * more weeks at number 1.
             */
            person.find({ weeksAtOne: { $gte: 10} }).sort({ decade: 1}).exec(function (err, docs){

                if(err) throw err;

                docs.forEach(function (doc) {
                    console.log(
                        'In the ' + doc['decade'] + ', ' + doc['person'] + ' by ' + doc['artist'] +
                        ' topped the charts for ' + doc['weeksAtOne'] + ' straight weeks.'
                    );
                });

                // Since this is an example, we'll clean up after ourselves.
                // mongoose.connection.db.collection('persons').drop(function (err) {
                //     if(err) throw err;

                // Only close the connection when your app is terminating
                mongoose.connection.db.close(function (err) {
                    if(err) throw err;
                });
                // });
            });
        }
    )
}

exports.addPerson = addPerson;