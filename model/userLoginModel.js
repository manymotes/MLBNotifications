'user strict';
var sql = require('../modules/db.js');

//Task object constructor
let ExistingUser = function(existingUser) {
    this.password = existingUser.password;
    this.email = existingUser.email;
}

ExistingUser.loginUser = function loginUser(existingUser, result) {
    let loginQuery = "SELECT password FROM users WHERE email= '" + existingUser.email + "';";
    sql.query(loginQuery, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            if(res.length == 0) {
                console.log("user doesnt exist");
                    result(err, null);
            }
            else if (existingUser.password == res[0].password) {
                result(null, "correct password");
            }
            else {
                console.log("password doenst match");
                result(err, null);
            }
        }
    });
}

module.exports= ExistingUser;