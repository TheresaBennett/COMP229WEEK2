const connect = require('connect');
const app= connect();

// logger middleware

function logger(req, res, next) {
    console.log(req.method, req.url); 
    next();
}

function goobyWorld(req, res, next){
    res.setheader('content-Type', 'text/plain');
    res.end('Goodbye World'); 
}

function helloworld(req, res, next) {
    res.setheader('content-Type', 'text/plain');
    res.end('Hello World'); 
}

app.use(logger);
app.use('/hello', helloworld);

app.listen(3000); 

console.log('server running at http://localhost:3000');