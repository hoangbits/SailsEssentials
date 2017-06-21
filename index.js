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
    // _dirname will provide the location of project directory
    res.sendFile(__dirname + '/htmlFileAsResponse.html');
});
//no mount path, so this function is executed every time the app receives a request.
app.use( (req,res,next) => {
  console.log("Route is " + req.path + " and type is " + req.method);
  //pass the execution to next middleware or router
  next();
});


//navigate all router to proceed /home
app.use('/home', router);
app.listen(3000);

console.log("listening at port 3000");
