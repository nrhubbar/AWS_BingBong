var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');

var db = mongoose.connection;

db.on('error', console.error);

var userSchema = new mongoose.Schema({
    _id : String,
    username: String
    }, {versionKey : false}
);

var User = mongoose.model('User', userSchema);

mongoose.connect('127.0.0.1:3000');

var router = express.Router();
router.use(bodyParser.json());

router.post('/', function(req, res, next) {
    User.find({username : req.body.username}, {_id : false}, function (err, result) {
	if (err) {
	    return console.error(err);
	}

	if (result == null) {
	    
	}

    });
});

module.exports = router;
