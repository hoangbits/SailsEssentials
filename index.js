// var http = require("http");
// http.createServer((req,res) => {
//     res.writeHead(200,{'Content-type': 'text/html'});
//     res.end("<h1>Cool!!!!!!!!!!!!!! </h1>");
// }).listen(3000);
// console.log("Listening at port 3000")

//load express module
var express = require("express");
var app = express();
//inbuilt router
var router = express.Router();

router.get('/', (req, res) => {
    //express determine common header type.
    //   res.send({name: "hoang"});//Content-Type →application/json; charset=utf-8
    // res.send("<h1>no more than h111111</h1>");// Content-Type →text/html; charset=utf-8
      res.send(new Buffer("Hard damm!!!")); //Content-Type →application/octet-stream
});

//navigate all router to proceed /home
app.use('/home', router);
app.listen(3000);

console.log("listening at port 3000");
