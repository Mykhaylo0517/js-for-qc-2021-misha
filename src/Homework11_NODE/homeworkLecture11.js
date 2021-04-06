// ********************  Task 1 **************************
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


// ********************  Task 2 ************************** 
// file    personalmodule.js
function currentTimes () {
  let date = new Date();
  let currentHour = date.getHours();
  let result = "";
  switch (true) {
      case (currentHour > 5 && currentHour <= 11): 
          result = "Good morning, ";
          break;
      case (currentHour > 11 && currentHour <= 17): 
          result = "Good day, ";
          break;
      case (currentHour > 17 && currentHour <= 23): 
          result = "Good evening, ";
          break;
      default: 
          result = "Good night, ";
      }
  return result;
  }

let abs = currentTimes();
module.exports = { abs };

//  --------------------------
// file    task112_server.js
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