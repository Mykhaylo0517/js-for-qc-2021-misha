const http = require('http');
const url = require('url');
const querystring = require('querystring');
const static = require('node-static');
const file = new static.Server('.', {
  cache: 0
});

function accept(req, res) {
  if (req.url == '/books.json') { 
    setTimeout(function() {
      file.serve(req, res);
    }, 2000);  // timeout = 0.5 sec - to simulate processing 
  } else {
    file.serve(req, res);
  }
}

// ------ web-server -------
http.createServer(accept).listen(8080);
console.log("Server running at http://localhost:8080 ...");
