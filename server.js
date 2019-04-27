var express = require('express');
var schedule = require('node-schedule');
var probPitchers = require('./probablePitchers');
const probables = require('./probables');
const fs = require('fs');
var app = express();
var path = require('path');
var mysql = require('mysql');
var jquery = require('jquery')
bodyParser = require('body-parser');
var session = require('client-sessions');
port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    cookieName: 'session',
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



var j = schedule.scheduleJob('30 * * * *', function(){
    console.log('The answer to life, the universe, and everything!');
    getData();
});


const getData = async() => {
    try {

        // Today's date, or provide your own: format 2019-03-24
        const d = new Date();
        const day = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
        console.log(day);

        // File to write to
        const outputFile = './probable-pitchers.json';

        // Get pitchers
        probables.mlbpitchers.getPitchers(day, (data) => {
            fs.writeFile(outputFile, JSON.stringify(data), {flag: 'w'}, (err) => {
                if (err) {
                    console.error(`Error in writing to ${file}: ${err}`);
                } else {
                    console.error(`Probable pitchers successfully written to ${outputFile}.`);
                }
            });
        });
    } catch (err) {
        console.error(`Error in getData(): ${err}`);
    }

};