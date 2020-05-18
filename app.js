const express = require("express");
const path = require("path");
var bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3001;

//server Static Files
app.use(express.static("public"));

require('./models/Wish');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())



///Only use From direct HTML File on browser
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log("Start THe server On port " + port);
});


require('./routes')(app);