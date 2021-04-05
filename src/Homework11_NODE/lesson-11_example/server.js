const http = require("http");

http.createServer( function (request, response) {
  // console.log(request.headers);
  // console.log(request.method);
  // console.log("User-Agent: " + request.headers["user-agent"]);
  
  // Send the HTTP header HTTP Status: 200 : OK Content Type: text/plain
  // response.writeHead(200, {'Content-Type': 'text/plain'});
  // console.log(response.statusCode);
  // console.log(response.statusMessage);

  response.writeHead(200, {'Content-Type': 'text/html'});
  // response.write("<h2>Some message</h2>");


  // response.end('Testing NodeJS server!!!\n');
  // response.end('<h1>Header from server!</h1>');
  
  if (request.method == "GET") {
    response.end('<h1>GET-request received!!!</h1>');
  }
}).listen(5000);

// Console will print the message
console.log('Server running at http://127.0.0.1:5000/'); // or - localhost:5000
