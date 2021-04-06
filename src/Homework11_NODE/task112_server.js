const {abs} = require('./personalmodule.js');
const http = require("http");
const os = require('os');

const server = http.createServer( function (request, response) {
  let date = new Date();
  response.writeHead(200, {'Content-Type': 'text/html'});
  
  response.write('Date of request: ' + date + ' </br>');
  response.write(`${abs}  ` + os.userInfo().username);

  response.end();
});

server.listen(8000);

// info for user
console.log('Server running at http://localhost:8000/');
// need to run :   node .\task112_server.js