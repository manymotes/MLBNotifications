'use strict';

var User = require('../model/appModel.js');



exports.create_a_user = function(req, res) {
    var new_user = new User(req.body);

    //handles null error
    if(!new_user.f_name || !new_user.l_name || !user.password || !user.email) {

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
