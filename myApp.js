var express = require('express');
var app = express();

    app.use((req, res, next) => {
        console.log(req.method + " " + req.path + " - " + req.ip);
        next();
    });

    app.get("/", function(req, res) {
        res.sendFile(__dirname + "/views/index.html");
    } );

    app.use(express.static(__dirname + "/public"));
    
    app.get("/json", (req, res) => {
        if (process.env.MESSAGE_STYLE === "uppercase") { 
        res.json({"message": "HELLO JSON"});
        } else {
        res.json({"message": "Hello json"});
        }
    });

    app.get('/now', (req, res, next) => {
        console.log("middleware");
        next();
    }, (req, res) => {
        res.json({"time": new Date().toString()})
    });

    app.get("/:word/echo", (req, res) => {
        res.json({echo: req.params.word})
      });

    app.get("/name", (req, res) => {
        let firstName = req.query.first;
        let lastName = req.query.last;
        res.json({ name: `${firstName} ${lastName}`});
    });  


































module.exports = app;
