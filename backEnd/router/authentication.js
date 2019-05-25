var express = require('express');

var router = express.Router();
var users = require('../controller/usercontroller');
var chatController = require("../controller/chatController");
var auth = require('../authentication');

try{
    router.get('/getAllUser',auth,users.userControllerGetAllUsers);
    router.get('/getUserMsg',auth,chatController.getUserMsg);
    
}
catch(err)
{
    console.log("err found while receving token - authorization.js");
}

module.exports =router