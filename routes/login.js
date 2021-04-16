var express = require('express');
var router = express.Router();
var user = require('../controller/userlogincontroller')

var auth = require('../auth/auth')

router.post('/', (req, res) => {
 auth.list(req,res);   
})

module.exports = router;