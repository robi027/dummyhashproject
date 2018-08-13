const express = require("express");
const apps = require("./app");
const app = express();

app.use('', apps);

var port = process.env.PORT || 3000;

app.listen (port, ()=> console.log(`server running ${port}`));