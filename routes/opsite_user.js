/**
 * Created by QMBB-TEST on 2017/1/19.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

});

//uid换取openId
router.get('/info/:uid', function (req, res, next) {
    console.log(req.params);
    var output = {
        getUser: {
            wxOpenId: 'hudaye'
        }
    };
    res.send(output);
});

//用openId和sourceId换取用户信息
router.get('/getUserInfo/:openId/:sourceId', function (req, res, next) {
    console.log('getUserInfo', req.params);
    res.send({a: 3});
});



module.exports = router;