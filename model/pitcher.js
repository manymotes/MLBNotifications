'use strict';
let sql = require('../modules/db.js');

//Task object constructor
let Pitcher = function(pitcher, id){
    this.name = pitcher.name;
    this.pitcherNumber  = pitcher.pitcherNumber;
};

Pitcher.updateDB = function updatePitcher(pitcher, userEmail, result) {

    let id =1;
    sql.query("SELECT id FROM users WHERE email = ?" ,
        userEmail, function (err, data) {

            if (err) {
                console.log(err);
            } else {
                id = data[0].id;

            }
        });

    console.log("id: " + id);
    console.log("pitchernumber: " + pitcher.pitcherNumber);
    sql.query("SELECT COUNT(*) AS cnt FROM pitchers WHERE pitchers.id = ? and pitchers.pitcherNumber = ?" ,
        [id , pitcher.pitcherNumber] , function (err, data) {

            if (err) {
                console.log("in error" + err);
                return false;
            } else {
                if (data[0].cnt > 0) {
                    console.log("pitcher already exists");
                    //todo update pitcher row
                    return true;
                } else {
                    sql.query("INSERT INTO pitchers (id, pitcherNumber, name) values (?, ? , ?)", [id, pitcher.pitcherNumber, pitcher.name], function (err, res) {
                        if (err) {
                            console.log("error: ", err);
                            return false;
                        } else {
                            console.log(pitcher.name + "insterted into db");
                            return true;
                        }
                    });
                }
            }
        });
};


module.exports= Pitcher;