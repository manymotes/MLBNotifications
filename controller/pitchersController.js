'use strict';

let Pitchers = require('../model/pitchers.js');
let UsersDAO = require('../DB/usersDAO');
let UserRep = require('../model/userRep');

exports.update_pitcher = function(req, res) {
    let pitcher = new Pitchers(req.body);
    console.log(req.session.user);
    console.log(req.session.user);
    console.log(pitcher);

    let response = Pitchers.updateDB(pitcher, req.session.user.email, 1);
    if (response) {
        res.sendStatus(200);
    }
    res.sendStatus(500);
};


exports.getPitchersForUser = function (req, res) {
    Pitchers.getPitchersForUser(req.session.user.email, function (results) {
        if (!results) {
            res.sendStatus(500);
        }
        else {
            res.json(results);
        }
    });
}


