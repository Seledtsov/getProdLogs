/**
 * Created by Mike on 19.07.2015.
 */
var http = require("http");
var url = require("url");

var requestCounter = 0;
function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        console.log("Process request " + ++requestCounter);

        route(pathname, request, response);

    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;