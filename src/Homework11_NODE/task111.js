const http = require("http");
const os = require('os');
const path = require('path');

const server = http.createServer( function (request, response) {
  response.write("<h1> System information </h1>");

  response.write('Current user name: ' + os.userInfo().username);
  response.write('<p> </p>');
  response.write('OS type : ' + os.type());
  response.write('<p> </p>');
  response.write(`System work time : `  + (os.uptime() / 60) + ` minutes`);
  response.write('<p> </p>');
  response.write(`Current work directory: ` + path.dirname(__filename));
  response.write('<p> </p>');
  response.write(`Server file name: ` +  path.basename(__filename));
  response.write('<p> </p>');

  response.end();
});

server.listen(5000);

// info for user
console.log('Server running at http://localhost:5000/');
// need to run :   node .\task111.js