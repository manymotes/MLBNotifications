'use strict';


let Pitcher = require('../model/pitcher.js');

exports.update_pitcher = function(req, res) {
    let pitcher = new Pitcher(req.body);
    console.log(req.session.user);
    console.log(req.session.user);
    console.log(pitcher);

    let response = Pitcher.updateDB(pitcher, req.session.user.email, 1);

    //handles null error
    // if(!new_user.f_name || !new_user.l_name || !new_user.password || !new_user.email) {
    //     res.status(400).send({ error:true, message: 'Please provide valid user credentials' });
    // }
    // else{
    //     User.addPitcher(new_user, function(err, userId) {
    //
    //         if (err) {
    //             console.log("error for creating user");
    //             res.send(err);
    //         }
    //         else if (userId == -1) {
    //             res.statusMessage = "This email is already registered";
    //             res.status(409).end();
    //         }
    //         else {
    //             res.json("welcome");
    //         }
    //     });
    // }
    if (response) {
        res.sendStatus(200);
    }
    res.sendStatus(500);
};

