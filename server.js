const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to the Simple Node.js Application!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// package.json
{
  "name": "simple-node-app",
  "version": "1.0.0",
  "description": "A simple Node.js application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "test": "node test.js",
    "build": "echo 'No build required'"
  },
  "dependencies": {},
  "devDependencies": {}
}
