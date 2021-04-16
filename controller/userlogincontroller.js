const mongoose = require('mongoose');
const userauth = require('../models/userlogin');

var logincontroller = {};

logincontroller.list = function(req, res){
    userauth.find({uname: 'Navtej'}).exec((err, user)=>{
        if (err) console.log(err)
        console.log(user)
        res.send({users: user})
    })
}

module.exports = logincontroller