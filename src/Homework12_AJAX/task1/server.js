const http = require('http');
const url = require('url');
const static = require('node-static');
const file = new static.Server('.', {
  cache: 0
});

function accept(req, res) {
  if (req.url == '/data.txt') { // set data.txt
    setTimeout(function() {
      file.serve(req, res);
    }, 500);  // timeout = 0.5 sec - to simulate processing 
  } else {
    file.serve(req, res);
  }
}

// ------ run -------
http.createServer(accept).listen(8080);
console.log("Server running at http://localhost:8080 ...");
