var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();
var jsonParser = bodyParser.json();
var db = mongoose.connection;
var cuid = require('cuid');

// if there is an error in connecting to the db, print the error
db.on('error', console.error);

// creating the document schema for the contact objects
var contactSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    number : String,
    loc: String
    },
    // stop the return of the versionKey in queries
    {versionKey : false}
);

// creates the Contact object model based off the schema
var Contact = mongoose.model('Contact', contactSchema);

<<<<<<< HEAD
mongoose.connect('52.33.142.91:27017');
=======
// connects to the mongodb server (currently localhost)
mongoose.connect('localhost:27017');

var router = express.Router();
router.use(bodyParser.json());

// to access the form data for a post, use req.body
// to access the form data for a get, use req.query

// an example GET request on the URL
// http://127.0.0.1:3000/contacts?firstname=nick&lastname=hubbard

// returns the result set to the client
router.get('/', function(req, res, next) {
    // queries the contacts collection for a contact with the given information
    Contact.findOne({firstname : req.query.firstname, lastname : req.query.lastname}, function (err, result) {
        if (err) return console.error(err);
        res.json(result);
    });
});

// commits the given Contact data into the database
router.post('/', function(req, res, next) {
    // creates the contact object based on passed in information
    var contact = new Contact({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        number : req.body.number,
        loc : req.body.loc
    });

    // stores the contact object in the database
    contact.save(function (err) {
        if (err) return console.error(err);
    });

    // we have to finish the post => we send an empty json response
    res.json();
mongoose.connect('52.88.203.125:27017');
>>>>>>> 908cc24d79d613e60f64911aa10eacae2d09bf01

// returns the result set to the client
router.get('/', function(req, res, next) {
    // if there are no parameters in req.query, return all contacts
    if (Object.keys(req.query).length === 0) {
	Contact.find({}, {_id : false}, function (err, result) {
	    if (err) {
		return console.error(err);
	    }

	    if (result == null) {
		res.status(404).send("Not Found");
	    }
	    else {
		res.json(result);
	    }
	});
    }
    else {
	// queries the contacts collection for a contact with the given information
	Contact.find({firstname : req.query.firstname, lastname : req.query.lastname}, {_id : false},
	function (err, result) {

	    // if error occurs, display error to console
	    if (err) {
		return console.error(err);
	    }

	    // if contact is not in database return 404
	    if (result == null) {
		res.status(404).send("Not Found");
	    }
	    // returns result from the query as a json object
	    else {
		res.json(result);
	    }
	});
    }
});

// commits the given Contact data into the database
router.post('/', jsonParser, function(req, res, next) {

    // creates the contact object based on passed in information
    var contact = new Contact({
	_id : cuid(),
	firstname : req.body.firstname,
	lastname : req.body.lastname,
	number : req.body.number
    });

    // stores the contact object in the database
    contact.save(function (err) {
	if (err) return console.error(err);
    });

    // we have to finish the post => we send an empty json response
    res.send("Data added successfully");
});

module.exports = router;
