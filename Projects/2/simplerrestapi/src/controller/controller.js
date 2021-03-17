// const url = require("url");

// const service = require("../service/service.js")

const fs = require("fs");
const bodyParser = require('body-parser')


function controller(req, res) {
    const path = req.url
    const method = req.method

    //GET
    if (path === "/" && method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify("Home"))
    }

    if (path === "/" && method === "POST") {

    }
}

module.exports = controller