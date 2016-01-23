var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = mongoose.connection;

// if there is an error in connecting to the db, print the error
db.on('error', console.error);

// creating the document schema for the contact objects
var contactSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    number : String,
    location : String
    }, 
    {versionKey : false} // stops the return of the versionKey in queries
);

// creates the Contact object model based off the schema
var Contact = mongoose.model('Contact', contactSchema);

// connects to the mongodb server (currently localhost)
mongoose.connect('localhost:27017');

var router = express.Router();
router.use(bodyParser.json());

// to access the form data for a post, use req.body
// to access the form data for a get, use req.query

// an example GET request on the URL
// http://127.0.0.1:3000/contacts?firstname=nick&lastname=hubbard&number=0123456

// returns the result set to the client
router.get('/', function(req, res, next) {
    // queries the contacts collection for a contact with the given information 
    Contact.findOne({firstname : req.query.firstname, lastname : req.query.lastname}, function (err, c) {
	if (err) return console.error(err);
	res.json(c);

    // sends response message to the client (we want to send the result set
    //res.send('firstname: ' + c.firstname
    //        + ' '
    //        + 'lastname: ' + c.lastname
    //        + ' '
    //        + 'number: ' + c.number);
    });
});

// commits the given Contact data into the database
router.post('/', function(req, res, next) {
    // creates the contact object based on passed in information
    var contact = new Contact({
	firstname : req.body.firstname,
	lastname : req.body.lastname,
	number : req.body.number,
	location : req.body.location
    });

    // stores the contact object in the database
    contact.save(function (err) {
	if (err) {
	    return console.error(err);
	}
    });
    
    // sends a message back to the client
    res.send(req.body.firstname);
});

module.exports = router;
