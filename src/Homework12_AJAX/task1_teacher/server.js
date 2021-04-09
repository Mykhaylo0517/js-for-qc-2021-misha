const http = require('http');
const url = require('url');
const static = require('node-static');

const file = new static.Server('.', {
  cache: 0
});

function accept(req, res) {
  // if the request URL is /vote, then ...
  if (req.url == '/vote') { 
    // after 1.5 seconds reply with a message
    setTimeout(function() {
      res.end('Your vote is accepted: ' + new Date() );
    }, 1500);  
  } else {
    // otherwise we consider this a request to a  regular file and display it
    file.serve(req, res);  // (if he is)
  }
}

// ------ web server -------
http.createServer(accept).listen(8080);
console.log("Server running at http://localhost:8080 ...");