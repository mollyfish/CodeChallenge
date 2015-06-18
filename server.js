var http = require('http');
var fs = require('fs');
const PORT = 3000;


var server = http.createServer(function(req, res){
  console.log(req.url);
  if (req.url === '/') {
    fs.readFile('index.html',function (err, data){
      res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
      res.write(data);
      res.end();
    });
  } else if (req.url === '/about.html') {
    fs.readFile('about.html',function (err, data){
      res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('404.html',function (err, data){
      res.writeHead(404, {'Content-Type': 'text/html','Content-Length':data.length});
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT, function() {
  console.log("Server is running on port " + PORT + ". Hurray!")
});



// var http = require('http');
// var fs = require('fs');
// var path = require('path');
// var ext = /[\w\d_-]+\.[\w\d]+$/;

// var server = http.createServer(function(req, res) {

//     if (req.url === '/') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream('index.html').pipe(res);
//     } else if (ext.test(req.url)) {
//       fs.exists(path.join (__dirname, req.url), function (exists) {
//         if (exists) {
//           res.writeHead(200, {'Content-Type': 'text/html'});
//           fs.createReadStream('index.html').pipe(res);
//         } else {
//           res.writeHead(404, {'Content-Type': 'text/html'});
//           fs.createReadStream('404.html').pipe(res);
//         }
//       });
//     } else {
//         //  add a RESTful service
//     }
// }).listen(PORT);