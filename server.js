const http = require('http');

http.createServer(
    (req, res) => {
    res.writeHead(200, {'content-Type': 'text/html'});
    res.end('<h2> Hello World </h2>');
}
).listen(3000);



console.log('Server running at http://localhost:3000');