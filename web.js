var express = require('express');
var fs = require('fs');
var indexFile = 'index.html';

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var content = fs.readFileSync(indexFile, 'utf8');
    response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
