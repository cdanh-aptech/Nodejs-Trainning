const http = require('http');

const moduleConfig = require('./mmodule/config');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h2>Hello NodeJS</h2>');
}).listen(moduleConfig.port);
