var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.write("Hey whats up");
});


app.listen(8080);