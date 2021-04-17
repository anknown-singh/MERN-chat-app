const mongoose = require('mongoose')
const userauth = require('../models/userlogin');

auth = {}

auth.list = (req, res) => {
    userauth.find({uname: `${req.body.username}`}).exec((err, data)=>{
        // console.log(data[0].uname)
        if (err) res.send(err)
        else if (data.length !== 0 ) if (req.body.pword !== data[0].pword) {
            res.send('Wrong uname/password');
        } else res.send('login succesful')
        else res.send('Wrong uname/password');
    })
}

module.exports = auth
