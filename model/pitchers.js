'use strict';
let sql = require('../modules/db.js');

//Task object constructor
let Pitchers = function(pitcher, id){
    this.name = pitcher.name;
    this.pitcherNumber  = pitcher.pitcherNumber;
};

Pitchers.updateDB = function updatePitcher(pitcher, userEmail, result, callback) {

    let id =1;
    sql.query("SELECT id FROM users WHERE email = ?" ,
        userEmail, function (err, data) {

            if (err) {
                console.log(err);
                callback(false);
            } else {
                id = data[0].id;

                console.log("id: " + id);
                console.log("pitcherNumber: " + pitcher.pitcherNumber);

                sql.query("INSERT INTO pitchers (id, pitcherNumber, name) values (?, ? , ?) ON DUPLICATE KEY UPDATE name = ?;", [id, pitcher.pitcherNumber, pitcher.name, pitcher.name], function (err, res) {
                    if (err) {
                        console.log("error: ", err);
                        callback(false);
                    } else {
                        console.log(pitcher.name + "insterted into db");
                        callback(true);
                    }
                });
            }
        });
};

Pitchers.getPitchersForUser = function getPitchersForSubscriber(email, callback) {
    sql.query("SELECT name FROM pitchers LEFT Join users ON users.id = pitchers.id WHERE email = ?", email, function (err, data) {
        if (err) {
            console.log("error: ", err);
            callback(err);
        } else {
            callback(data);
        }
    })
};


module.exports= Pitchers;