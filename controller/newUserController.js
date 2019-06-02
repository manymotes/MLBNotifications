'use strict';


let User = require('../model/newUser.js');



exports.create_a_user = function(req, res) {
    let new_user = new User(req.body);
    console.log(new_user);

    //handles null error
    if(!new_user.f_name || !new_user.l_name || !new_user.password || !new_user.email) {
        res.status(400).send({ error:true, message: 'Please provide valid user credentials' });
    }
    else{
        User.createUser(new_user, function(err, userId) {

            if (err) {
                console.log("error for creating user");
                res.send(err);
            }
            else if (userId == -1) {
                res.statusMessage = "This email is already registered";
                res.status(409).end();
            }
            else {
                res.json("welcome");
            }
        });
    }
};

