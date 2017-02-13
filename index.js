var express = require('express');
// var mongoose = require('mongoose');
var query = require('querystring');
var person = require('./public/person').person;
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('mongodbUri', 'mongodb://root:root@ds149059.mlab.com:49059/heroku_5qsr7mm7');

app.get('*.js', function (req, res) {
    res.sendFile(__dirname + req.path);
});
app.get('*.css', function (req, res) {
    res.sendFile(__dirname + req.path);
});

app.get('/page/*', function(request, response) {
    console.log(__dirname)
  response.sendFile(__dirname + '/index.html');
});

app.post('/addPerson', function (req, res) {
  var mogfn = require('./public/common').mogfn;
  mogfn(app.get('mongodbUri'), require('./public/addPerson').addPerson);
});

app.get('/all', function (req, res) {
    var mogfn = require('./public/common').mogfn;
    mogfn(app.get('mongodbUri'), require('./public/searchPerson').searchPerson, req, res);
});

app.get('/get/detail', function (req, res) {
    var mogfn = require('./public/common').mogfn;
    console.log(req.query);
    mogfn(app.get('mongodbUri'), function (req, res) {
        return function() {
            person.findById(req.query.id ,function(err,person){
                if (err) console.log(err);
                require('./public/closeMongoose').close();
                res.render('gift/detail', {person: person});
            })
        };
    }, req, res);
});

app.post('/post/detail', function (req, res) {
    var mogfn = require('./public/common').mogfn;
    console.log('hu', req.body, req.query);
    mogfn(app.get('mongodbUri'), function (req, res) {
        return function() {
            person.findByIdAndUpdate(req.body.id,{$set: {arr: req.body.arr}},function(err,docs){
                console.log(docs.name); //MDragon
                if (err) console.log(err);
                person.findById(req.body.id ,function(err,docsdata){
                    if (err) console.log(err);
                    require('./public/closeMongoose').close();
                    res.send(docsdata);
                })
            });

        };
    }, req, res);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



