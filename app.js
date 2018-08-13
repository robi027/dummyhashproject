const express = require("express");
const server = require("./server");
const app = express();

app.use(express.static(__dirname + '/views'));

server(app);