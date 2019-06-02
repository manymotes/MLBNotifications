'use strict';
let sql = require('../modules/db.js');
let nodemailer = require('nodemailer');

//Task object constructor
let MailGun = function(){
};

MailGun.fire = function fire() {
    console.log("FIRE______-----MAILGUN");

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'stattraxnotifications@gmail.com',
            pass: 'Brendall2018'
        }
    });


    var mailOptions = {
        from: 'stattraxnotifications@gmail.com',
        to: 'motesmass@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

};


module.exports= MailGun;