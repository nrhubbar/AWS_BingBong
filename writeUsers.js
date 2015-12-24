fs = require('fs');
http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200);
  fs.writeFile('greeter/public/api/v1/users.json',req.get('body'));
})

server.listen(8081);
