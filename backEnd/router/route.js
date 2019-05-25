const controller = require('../controller/usercontroller');
const verify=require('./tokenVerify')
const express = require('express');
const router= express.Router();
const authentication=require('./authentication')

router.post('/register',controller.userControllerRegister);
router.post('/login',controller.userControllerLogin);
router.post('/forgotPassword',controller.userControllerForgotPassword)
router.post('/resetPassword/:token',verify.checkToken,controller.userControllerResetPassword);
router.get('/getAllUser',controller.userControllerGetAllUsers);
router.use('/auth',authentication)
module.exports= router;
