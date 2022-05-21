const http = require("http"); // common js module import

// http package provides with createServer method that we can use to create server
http.createServer((req, res) => {

    // console.log(req.method); => method name(GET, POST etc)
    // console.log(req.url); => /user

    if (req.method == "POST" && req.url == "/user") {
        res.writeHead(200);
        res.end("I am Post request")
    }  else if (req.method == "POST" && req.url == "/") {
        res.writeHead(200);
        res.end("I am Root Post request")
    } else if (req.method == "GET") {
        res.writeHead(200);
        res.end("I am Get request")
    } else if (req.method == "PUT") {
        res.writeHead(200);
        res.end("I am Put request")
    }


}).listen(8000) // we are running this application in our system