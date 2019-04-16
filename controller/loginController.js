'use strict';

let ExistingUser = require('../model/userLoginModel.js');

exports.loginUser = function(req, res) {
    let exist_user = new ExistingUser(req.body);

    //handles null error
    if( !exist_user.password || !exist_user.email) {

        res.status(400).send({ error:true, message: 'Please provide valid user credentials' });

    }
    else{
        ExistingUser.loginUser(exist_user, function(err, task) {
            if (err)
                res.send(err);
            req.session.user = exist_user;
            //res.redirect('/dashboard');
            console.log(task);
            if (task) {
                res.sendStatus(200);
            }
            else {
                res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')res.sendStatus("Invalid username or password"); // equivalent to res.status(403).send('Forbidden')
            }
        });
    }
};
