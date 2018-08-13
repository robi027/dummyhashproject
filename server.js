const express = require("express");
const app = express();

app.use(express.static(__dirname + '/views'));

var port = process.env.PORT || 3000;

app.listen (port, ()=> console.log(`server running ${port}`));
