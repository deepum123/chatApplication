const controller = require('../controller/usercontroller');
const express = require('express');
const router= express.Router();

router.post('/register',controller.userControllerRegister);
router.post('/login',controller.userControllerLogin);
router.post('/forgotPassword',controller.userControllerForgotPassword)
module.exports= router;