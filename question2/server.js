var http = require('http');
var fs = require('fs');
const PORT = 3000;

var server = http.createServer(function(req, res){
  console.log(req.url);
  if (req.url === '/') {
    fs.readFile('./question2/app/index.html',function (err, data){
      res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
      res.write(data);
      res.end();
    });
  } else if (req.url === '/index.html') {
    fs.readFile('./question2/app/index.html',function (err, data){
      res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
      res.write(data);
      res.end();
    });
  } else if (req.url === '/styles.css') {
    fs.readFile('./question2/app/styles.css',function (err, data){
      res.writeHead(200, {'Content-Type': 'text/css','Content-Length':data.length});
      res.write(data);
      res.end();
    });
  } else if (req.url === '/boomer.jpg') {
    fs.readFile('./question2/app/boomer.jpg',function (err, data){
      res.writeHead(200, {'Content-Type': 'image/jpg','Content-Length':data.length});
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('./question2/app/404.html',function (err, data){
      res.writeHead(404, {'Content-Type': 'text/html','Content-Length':data.length});
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT, function() {
  console.log("Server is running on port " + PORT + ". Hurray!")
});