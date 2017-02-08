/**
 * Created by QMBB-TEST on 2017/1/19.
 */
var express = require('express');
var app = express();
var router = express.Router();

// 1
var opsite_user = require('./routes/opsite_user');
app.use('/user', opsite_user);


//2


//输出
module.exports = app;