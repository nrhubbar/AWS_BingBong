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
    loc: String
    },
    // stop the return of the versionKey in queries
    {versionKey : false}
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
});

module.exports = router;
