'use strict';
let sql = require('../modules/db.js');

//Task object constructor
let MailGun = function(){
};

MailGun.fire = function fire() {
    console.log("FIRE______-----MAILGUN");

};


module.exports= MailGun;