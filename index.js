var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('mongodbUri', 'mongodb://root:root@ds149059.mlab.com:49059/heroku_5qsr7mm7');


app.get('/', function(request, response) {
  response.render('pages/index');
});

app.post('/addPerson', function (req, res) {
  var mogfn = require('./public/common').mogfn;
  mogfn(app.get('mongodbUri'), require('./public/addPerson').addPerson);
});

app.get('/all', function (req, res) {
    var mogfn = require('./public/common').mogfn;
    mogfn(app.get('mongodbUri'), require('./public/searchPerson').searchPerson, res);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



