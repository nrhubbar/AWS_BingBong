var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json());

// to access the form data for a post, use req.body
// to access the form data for a get, use req.query

// an example GET request on the URL
// http://127.0.0.1:3000/contacts?firstname=nick&lastname=hubbard&number=0123456

router.get('/', function(req, res, next) {
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

//router.post('/', function(req, res, next) {
//    console.log(req.body.name);
//    res.send(req.body.name);
//});

module.exports = router;
