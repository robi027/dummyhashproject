const express = require("express");
// const server = require("./server");
const app = express();

// app.use(express.static(__dirname + '/views'));

// server(app);

var port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello World'));

app.listen (port, ()=> console.log(`server running ${port}`));
