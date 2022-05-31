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

app.get('/file/:name', (req, resp) => {
   const {name} = req.params;
   console.log('print name:: '+name)
   resp.end('Hello '+name)
});

app.get('/testfile', (req,res) => {

   res.end('Testing:: '+req.query.color)
});

app.post('/testfilepost', (req,res) => {
   fs.readFile(req.file, (err, data) => {
      console.log('Muruga data: '+JSON.stringify(data))
   })
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})


const multer = require('multer');
const storage = multer.diskStorage({
   destination: (req, file, callback) => {
      callback(null,'uploads')
   },
   filename: (req, file, callback) => {
      callback(null, `${file.originalname}`)
   }
})
//let upload = multer({dest: 'uploadss/'});
let upload = multer({
   //dest: 'uploadss/',
   storage: storage
});

app.post('/uploadFile1API', upload.single('file'), (req, res, next) => {
   const file = req.file;
   console.log('uploaded file1::: '+file.filename);
   if(!file){
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
   }

   if(file.filename === 'HITMER.pdf') {
      fs.readFile( __dirname + "/" + "results.json", 'utf8', function (err, data) {
         //console.log( data );
         res.end( data );
      });
   }

})

app.post('/uploadFile2API', upload.single('file'), (req, res, next) => {
   const file = req.file;
   console.log('uploaded file2::: '+file.filename);
   if(!file){
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
   }

   if(file.filename === 'TRADITIONAL MER.pdf') {
      fs.readFile( __dirname + "/" + "results2.json", 'utf8', function (err, data) {
         //console.log( data );
         res.end( data );
      });
   }
})



