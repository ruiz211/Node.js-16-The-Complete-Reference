"use strict";

module.exports.sampleRequest = function (req, res) {
    let response = "Hello from sample request"
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
}

exports.testRequest = function (req, res) {
    let body = "";
    req.on("data", (chunk) => body += chunk)
    req.on("end", () => {
        let response = `Post value is: ${JSON.parse(body)}`;
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(response))
    })
}

exports.invalidRequest = function (req, res) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Invalid request");
}