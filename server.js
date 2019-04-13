var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
bodyParser = require('body-parser');
port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'steve',
    password: 'bar',
    database: 'MLB'
});

// connect to database
mc.connect();


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port);
console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/approutes');
routes(app); //register the route