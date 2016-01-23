var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);

var contactSchema = new mongoose.Schema({
    _id : Number,
    firstname : String,
    lastname : String,
    number : String,
    location : String
    }, 
    {versionKey : false}
);

var Contact = mongoose.model('Contact', contactSchema);

/*var danny = new Contact({
    _id : 0,
    firstname : "Danny",
    lastname : "Peck",
    number : "3175026963",
    location : "Indianapolis, Indiana"
});

danny.save(function (err, danny) {
    if (err) {
        return console.error(err);
    }
    console.dir(danny.toObject());
});*/

mongoose.connect('localhost:27017');

var router = express.Router();
router.use(bodyParser.json());

// to access the form data for a post, use req.body
// to access the form data for a get, use req.query

// an example GET request on the URL
// http://127.0.0.1:3000/contacts?firstname=nick&lastname=hubbard&number=0123456

router.get('/', function(req, res, next) {
    Contact.findOne({firstname : req.query.firstname, lastname : req.query.lastname}, function (err, c) {
	if (err) {
	    return console.error(err);
	}

	console.dir(c.toObject());
    });
    
    console.log('firstname: ' + req.query.firstname 
            + ' '
            + 'lastname: ' + req.query.lastname
            + ' '
            + 'number: ' + req.query.number);

    res.send('firstname: ' + req.query.firstname
            + ' '
            + 'lastname: ' + req.query.lastname
            + ' '
            + 'number: ' + req.query.number);
});

//router.get('/:id', function(req, res, next) {
//    console.log('name: ' + req.query.name + ' ' + 'number: ' + req.query.number);
//    res.send('name: ' + req.query.name

router.post('/', function(req, res, next) {
    
    //console.log(req.body.name);
    //res.send(req.body.name);
});

module.exports = router;
