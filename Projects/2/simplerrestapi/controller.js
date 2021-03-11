"use strict";

const http = require("http");
const url = require("url");


const service = require("./service");

module.exports = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url);

    //Get method
    if (reqUrl.pathname === "/sample" && req.method === "GET") {
        service.sampleRequest(req, res);
    } else if (reqUrl.pathname === "/test" && req.method === "POST") {
        service.testRequest(req, res);
    } else {
        service.invalidRequest(req, res);
    }
})

