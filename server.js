var express = require('express');
var schedule = require('node-schedule');
var ProbablePitchers = require('./probablePitchers');
const probables = require('./probables');
const fs = require('fs');
var app = express();
var path = require('path');
var mysql = require('mysql');
var jquery = require('jquery')
bodyParser = require('body-parser');
var session = require('client-sessions');
let EmailGun = require('./mailGun/emailGun.js');
port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    cookieName: 'session',
    //TODO move this to an environment variable
    secret: 'random_string_goes_here',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/dashboard', function(req, res) {
    // var email = req.session.user.email;
    // console.log(email);
    res.sendFile(path.join(__dirname + '/public/dashboard.html'));
});
app.listen(port);
console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./routes/approutes');
routes(app); //register the route


//this should fire every minute
var j = schedule.scheduleJob('*/1 * * *', function(){
    ProbablePitchers.getData();
    EmailGun.fire();
});


