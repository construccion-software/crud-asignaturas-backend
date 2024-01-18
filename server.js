const http = require('http');
const app = require('./app');
const port = 300;

const server = http.createServer(app);

server.listen(port,(err) => {
    console.log('Listening on port ',300);
})