var http = require('http');

var client = http.createClient(80, "google.com");
request = client.request();
request.on('response', function( res ) {
    res.on('data', function( data ) {
        console.log( data );
    } );
} );
request.end();
