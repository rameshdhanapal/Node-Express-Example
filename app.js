
const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, resp) => {
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/plain');
    resp.end('Hello Ayyappa');
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})