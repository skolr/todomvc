var express = require('express');
var app = express();

app.use("/", express.static(__dirname));

app.listen(4444);
console.log("listening on port 4444");

