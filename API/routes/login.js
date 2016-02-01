var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');

var db = mongoose.connection;

db.on('error', console.error);

var router = express.Router();
router.use(bodyParser.json());

router.post('/', function(req, res, next) {

});

module.exports = router;
