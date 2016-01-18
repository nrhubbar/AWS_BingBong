var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json());

// to access the form data for a post, use req.body
// to access the form data for a get, use req.query

router.get('/', function(req, res, next) {
    console.log(req.query.name);
    res.send(req.query.name);
});

router.post('/', function(req, res, next) {
    console.log(req.body.name);
    res.send(req.body.name);
});

module.exports = router;
