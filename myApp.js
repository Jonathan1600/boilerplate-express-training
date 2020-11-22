var express = require('express');
var app = express();

    app.use((req, res, next) => {
        console.log(req.method + " " + req.path + " - " + req.ip);
        next();
    });
    
    app.get("/", function (req, res) {
        res.sendFile(__dirname + "/views/index.html");
    });

    app.use(express.static(__dirname + "/public"));

    app.get("/json", (req, res) => {
        res.json({ "message": "Hello json" });
    });



































module.exports = app;
