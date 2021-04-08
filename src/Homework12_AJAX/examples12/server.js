const http = require('http');
const url = require('url');
// const querystring = require('querystring');
const static = require('node-static');
const file = new static.Server('.', {
  cache: 0
});

function accept(req, res) {
  if (req.url == '/data.txt') { // set data.txt
    // artificial delay for clarity
    setTimeout(function() {
      file.serve(req, res);
    }, 3000);  // timeout = 3 sec
  } else {
    file.serve(req, res);
  }
}

// ------ run -------
http.createServer(accept).listen(8080);
console.log("Server running at http://localhost:8080 ...");
