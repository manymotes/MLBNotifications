'use strict';


let Pitchers = require('../model/pitchers.js');

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
    console.log(req.session.user);
   let pitchersList = Pitchers.getPitchersForUser(userId);

   if(pitchersList.length > 0) {
       res.json(pitchersList);
   }
   else {
       res.sendStatus(500);
   }
}


