const http = require('http');
const url = require('url');
const fileload = require('./fileload');

http.createServer(function (req, res) {

    let parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);

    switch (parsedUrl.pathname) {
        case '/':
        case '/contact.html':
            fileload.load('contact.html', res);
            return;
        case '/contact-processing.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            let text = "Hellooo" + parsedUrl.query.name + "(" + parsedUrl.query.email + ")!";
            res.end(text);
            return;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end();
            return;
    }
}).listen(8080);


