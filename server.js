var express = require('express');
var app = express();

// The number of milliseconds in one day
var oneDay = 86400000;

// Use compress middleware to gzip content
// app.use(express.compress());

// Serve up content from public directory
app.use(express.static(__dirname + '/build', { maxAge: oneDay }));

app.listen(process.env.PORT || 9090);