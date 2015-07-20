var routedCounter;
routedCounter = 0;

function route(pathname, request, response) {
    console.log("About to route a request for " + pathname);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello World!<br>" + ++routedCounter );
    response.end();

}

exports.route = route;