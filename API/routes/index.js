var express = require('express');
var router = express.Router();

app.use(express.basicAuth('testUser', 'testPass'));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
