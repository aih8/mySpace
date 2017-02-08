/**
 * Created by QMBB-TEST on 2017/1/19.
 */

//用于console信息，
var logger = require('../../node_modules/morgan');
var appLogger = require('express')();
//使用dev模式来输出内容
appLogger.use(logger('dev'));

module.exports = appLogger;