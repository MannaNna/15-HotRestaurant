var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================

var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Loading the HTML pages 
// =============================================================

app.get("/index.html", function(req, res) {
res.sendFile(path.join(__dirname, "index.html"));
});
  
app.get("/tables.html", function(req, res) {
res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve.html", function(req, res) {
res.sendFile(path.join(__dirname, "reserve.html"));
});

// API pages 
// =============================================================

app.get("/api/tables", function(req, res) {
return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
return res.json(waitlist);
});

// The Data Objects
// =============================================================

var tables = [];
var waitlist = [];

// Begin to listen to the PORT to make the connection for our server
// =============================================================

app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
  