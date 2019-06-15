'user strict';
let sql = require('../modules/db.js');
let UserRep = require('../model/userRep.js');

let UsersDAO = function () {};

UsersDAO.getUserByEmail = async function (email) {
    sql.query("SELECT id, f_name, l_name FROM users WHERE email = ?" ,
        email, function (err, data) {

            if (err) {
                console.log(err);
                return false;
            } else {
                var rep = new UserRep(data[0].id, data[0].f_name, data[0].l_name, email);
                return rep;
            }
        });

}

module.exports = UsersDAO;