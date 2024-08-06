const http = require('http');

const port = 1245;
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.write('Hello Holberton School!');
  res.end();
}).listen(port);

module.exports = app;
