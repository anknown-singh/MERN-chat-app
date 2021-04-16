const mongoose = require('mongoose')
const userauth = require('../models/userlogin');

auth = {}

auth.list = (req, res) => {
    userauth.find({uname: `${req.body.username}`}).exec((err, data)=>{
        if (err) console.log(err)
        else if (data) if (req.body.pword !== data[0].pword) {
            res.send('Wrong uname/password');
        } else res.send('login succesful')
    })
}

module.exports = auth