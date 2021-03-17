"use strict";

const http = require("http");

const controller = require("./controller/controller.js")

const host = "127.0.0.1"
const port = 3000


const server = http.createServer(async (req, res) => {
    await controller(req, res)
})

server.listen(port, host, () => {
    console.log("Server running")
})