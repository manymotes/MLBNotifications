'use strict';
let sql = require('../modules/db.js');

//Task object constructor
let Pitchers = function(pitcher, id){
    this.name = pitcher.name;
    this.pitcherNumber  = pitcher.pitcherNumber;
};

Pitchers.updateDB = function updatePitcher(pitcher, userEmail, result) {

    let id =1;
    sql.query("SELECT id FROM users WHERE email = ?" ,
        userEmail, function (err, data) {

            if (err) {
                console.log(err);
                return false;
            } else {
                id = data[0].id;

                console.log("id: " + id);
                console.log("pitcherNumber: " + pitcher.pitcherNumber);

                sql.query("INSERT INTO pitchers (id, pitcherNumber, name) values (?, ? , ?) ON DUPLICATE KEY UPDATE name = ?;", [id, pitcher.pitcherNumber, pitcher.name, pitcher.name], function (err, res) {
                    if (err) {
                        console.log("error: ", err);
                        return false;
                    } else {
                        console.log(pitcher.name + "insterted into db");
                        return true;
                    }
                });
            }
        });




};

Pitchers.getPitchersForUser = function getPitchersForSubscriber(subscriberIdx) {
    sql.query("SELECT names FROM pitchers WHERE id = ?", subscriberIdx, function () {
        if (err) {
            console.log("error: ", err);
            return null;
        } else {
            console.log(pitcher.name + "insterted into db");
            return ;
        }
    })
};


module.exports= Pitchers;