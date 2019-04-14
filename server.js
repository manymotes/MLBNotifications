var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var jquery = require('jquery')
bodyParser = require('body-parser');
port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));


// // used to test mysql connection/config
// const mc = mysql.createConnection({
//     host: 'localhost',
//     user: 'steve',
//     password: 'bar',
//     database: 'MLB'
// });
//
// // connect to database
// mc.connect();
//
// mc.query('SELECT * FROM users', (err,rows) => {
//     if(err) throw err;
//
//     console.log('Data received from Db:\n');
//     console.log(rows);
// });


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port);
console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./routes/approutes');
routes(app); //register the route