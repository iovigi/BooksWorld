var express = require('express');

var env = process.env.NODE_ENV || 'development';
var port = 3030;

var app = express();

app.get('*', function(req, res)
{
    res.render('index');
});

app.listen(port);

console.log("Server running on port: " + port);