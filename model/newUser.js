'use strict';
var sql = require('../modules/db.js');

//Task object constructor
var User = function(user){
    this.f_name = user.f_name;
    this.l_name = user.l_name;
    this.password = user.password;
    this.email = user.email;
    this.date_created = new Date();
};

User.createUser = function createUser(newUser, result) {
    sql.query("SELECT COUNT(*) AS cnt FROM users WHERE email = ? " ,
        newUser.email , function (err, data) {

        if (err) {
            console.log(err);
        } else {
            if(data[0].cnt > 0){
                console.log("email already exists");
                result(null, -1);
            } else {
                console.log("new email");
                sql.query("INSERT INTO users set ?", newUser, function (err, res) {
                    if (err) {
                        console.log("error: ", err);
                        result(err, null);
                    } else {
                        console.log(res.insertId);
                        result(null, res.insertId);
                    }
                });
            }
        }
    });
};


module.exports= User;