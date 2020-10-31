// My first server! :)
console.log("My first server");

// Require express
const express = require("express");
const app = express();
const port = 80;

// index responds to http://.../
/*function index(req, res) {
    console.log("The user requested /");
    res.send("To be or not to be");
}

function juliet(req, res) {
    console.log("juliet");
    res.send("Wherefore art thou");
}

// Map "/" to the function index
// index is handler
app.get("/", index);

// Run juliet when the user hits /romeo
// Juliet is a handler
//app.get("/romeo", juliet);

function addHandler(req, res) {
    let num = req.params.num;
    let num2 = req.params.num2;
    res.send("42 + " + num + " " + num2);
}

// "/add42/num/6" --> "42 + 6" 
app.get("/add42/num/:num/num2/:num2", addHandler);

// serve files in static directory
app.use(express.static("static"));

// start listening on port and call serverReady when
// the server is ready listening*/
app.listen(port, function () {
    console.log("The server is really ready");
});