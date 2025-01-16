const http = require("http"); /* traditional way to import modules on JS, maestro uses this a lot*/

// (import http from http); is another way to import server
// import http, then create a server. Simply call the function as it is already available.

//this is a callback function
const server = http.createServer((request,response) => {
    console.log(request.url)
    if (request.url === "/about") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.end("This is the about us route");
    } else if (request.url === "/signup") { 
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.end("This is the signup page");
    } else if (request.url === "/signin") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain"),
        response.end("This is the signin page");
    } else if (request.url == "/login") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain"),
        response.end("This is the login page");
    } else {
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/plain"),
        response.end("This route does not exist.")

    }
});

// this is how to listen to requests on ports
const port = 8000;
server.listen(port,() => console.log("I am currently listening on port 8000"));


// all of this is a web server