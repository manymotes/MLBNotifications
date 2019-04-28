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


//
// let ExistingUser = function(existingUser){
//     this.password = existingUser.password;
//     this.email = existingUser.email;
// }

User.createUser = function createUser(newUser, result) {
    sql.query("INSERT INTO users set ?", newUser, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

// ExistingUser.login = function login(existingUser, result) {
//     let loginQuery = "SELECT * FROM users WHERE email= " + existingUser.email + " AND password = " + existingUser.password + ";";
//     sql.query(loginQuery, function (err, res) {
//
//         if(err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else{
//             console.log(res);
//         }
//     });
// }

module.exports= User;