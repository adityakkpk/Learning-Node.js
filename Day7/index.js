const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res)=>{
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile('log.txt', log, (err, data)=>{
        switch(req.url) {
            case '/' : 
                res.end("Home Page");
                break;

            case "/about" : 
                res.end("I am Aditya");
                break;

            case "/contact" : 
                res.end('+91 9876545676');
                break;

            default: 
                res.end("404 Not Found :(");
                break;
        }
    });
});

myServer.listen(8000, ()=>{
    console.log('Server Started!');
});



