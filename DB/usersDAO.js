'user strict';
var sql = require('../modules/db.js');
let userRep = require('../model/userRep.js');

let UsersDAO = function () {};

UsersDAO.getUserByEmail = function (email) {
    sql.query("SELECT id, f_name, l_name FROM users WHERE email = ?" ,
        userEmail, function (err, data) {

            if (err) {
                console.log(err);
                return false;
            } else {
                return new UserRep(data[0].id, data[0].f_name, data[0].l_name, email);
            }
        });

}

module.exports = UsersDAO;