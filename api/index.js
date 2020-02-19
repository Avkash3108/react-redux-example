var http = require('http');
var fs = require('fs');
var path = require('path');
var requestMapper = require('./request-mapper');

http.createServer(function (req, res) {
  var json = requestMapper.getRequestResourcePath(req);
  console.log(json);
  fs.readFile(json, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(2222);
