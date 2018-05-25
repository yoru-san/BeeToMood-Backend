var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var routes = require('./routes.js');

mongoose.connect('mongodb://localhost/beetomood');

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json()); 
app.use(express.static(__dirname + '/public'));
app.use(cors());

routes.init(app);

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});