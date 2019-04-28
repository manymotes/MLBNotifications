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
        User.createUser(new_user, function(err, task) {

            if (err)
                res.send(err);
            res.json(task);
        });
    }
};

