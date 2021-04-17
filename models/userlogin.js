const mongoose = require('mongoose');

var Userinfo = new mongoose.Schema({
    uname: String,
    pword: String
},{collection: 'namepass'});

module.exports = mongoose.model('userauth', Userinfo);