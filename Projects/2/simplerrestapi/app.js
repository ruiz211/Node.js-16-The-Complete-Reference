"use strict";

const server = require("./controller.js");

const host = "127.0.0.1";
const port = "3000";

server.listen(port, host, () => {
    console.log(`Server listening at ${host}:${port}.`)
});