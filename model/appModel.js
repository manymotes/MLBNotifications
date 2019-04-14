'user strict';
var sql = require('../modules/db.js');

//Task object constructor
var User = function(user){
    this.f_name = user.f_name;
    this.l_name = user.l_name;
    this.password = user.password;
    this.email = user.email;
    this.date_created = new Date();
};

let ExistingUser = function(existingUser){
    this.password = user.password;
    this.email = user.email;
}

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

User.login = function login(email, password) {
    let loginQuery = "SELECT * FROM users WHERE email= " + email + " AND password = " + password + ";";
    sql.query(loginQuery, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res);
        }
    });
}

module.exports= User;