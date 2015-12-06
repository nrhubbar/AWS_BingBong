// Load the necessary servers.
var sys = require( "sys" );
var http = require( "http" );
 
// Create our HTTP server.
var server = http.createServer(
  function( request, response ){
 
 
    // Create a SUPER SIMPLE response.
    response.writeHead( 200, {"content-type": "text/html",
                              Location : "Indianapolis",
                              } );
    response.write(" <h1> Hey ! </h1>");
    response.end();
 
 
  }  
);
 
// Point the HTTP server to port 8080.
server.listen( 8080 );
 
// For logging....
sys.puts( "Server is running on 8080" );
