var express = require('express');
var app = express();
var fs = require("fs");

var cors = require('cors')
app.use(cors())

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/results', function (req, res) {
  fs.readFile( __dirname + "/" + "results.json", 'utf8', function (err, data) {
     console.log( data );
     res.end( data );
  });
})

app.get('/results2', function (req, res) {
  fs.readFile( __dirname + "/" + "results2.json", 'utf8', function (err, data) {
     console.log( data );
     res.end( data );
  });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})