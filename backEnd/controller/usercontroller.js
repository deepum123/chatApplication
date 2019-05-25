var service = require('../service/userservice');
var jwt = require('jsonwebtoken')
var gentoken = require('../middleware/tocken');
var sendmail = require('../middleware/sendMail');

module.exports.userControllerRegister = (req, res) => {
    console.log("in contrlr");
    req.checkBody('firstname', 'fistname is not valid').isLength({ min: 3 }).isAlpha();
    req.checkBody('lastname', 'secondname is not valid').isLength({ min: 3 }).isAlpha();
    req.checkBody('email', 'email is not valid').isEmail();
    req.checkBody('password', 'password is not valid')
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors
        return res.status(422).send(response)
    }
    else {
        service.userServiceRegister(req.body, (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).send({ message: err })
            }
            else {
                console.log("3.lastone controller", data)
                return res.status(200).send({ message: data })
            }
        })
    }
}

module.exports.userControllerLogin = (req, res) => {
    req.checkBody("email", "email is not valid").isEmail();
    req.checkBody("password", "pass word is not valid").isLength({ min: 3 });
    var errors = req.validationErrors();
    var response = {}

    if (errors) {
        response.success = false;
        response.error = errors
        return res.status(422).send(response)
    }
    else {
        service.userServiceLogin(req.body, (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).send({ message: err })
            } else {
                var token = jwt.sign({ email: req.body.email, id: data[0]._id }, 'secret', { expiresIn: 86400000 });
                return res.status(200).send({
                    message: data,
                    "token": token
                });


            }
        })
    }
}

module.exports.userControllerForgotPassword = (req, res) => {

    req.checkBody("email", "email is not valid").isEmail();
    var secret = "secret";
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        service.useServiceForgotPassword(req.body, (err, data) => {
            var responses = {};

            if (err) {
                return res.status(500).send({
                    message: err
                });
            } else {
                console.log(req.body);
                responses.success = true;
                responses.result = data;

                console.log("data in controller========>", data[0]._id);


                const payload = {
                    user_id: data[0]._id
                }
                //  console.log(payload);
                const obj = gentoken.GenerateToken(payload);
                const url = `http://localhost:3000/#!/resetPassword/${obj.token}`;
                console.log("url in controller", url);

                sendmail.sendEMailFunction(url, req.body.email);

                res.status(200).send(url);



            }
        });
    }
};
module.exports.userControllerResetPassword = (req, res) => {
    ;
    req.checkBody('password', 'password is not valid')
    var errors = req.validationErrors();
    var response = {};
    if (errors) {
        response.success = false;
        response.error = errors
        return res.status(422).send(response)
    }
    else {
        console.log("user control" + req)
        service.userControllerResetPassword(req, (err, data) => {

            if (err) {
                console.log(err)
                return res.status(500).send({ message: err })
            }
            else {
                console.log("3.lastone controller", data)
                return res.status(200).send({ message: data })
            }
        })
    }
}

module.exports.userControllerGetAllUsers = (req, res) => {
    service.userServiceGetAllUsers(req, (err, data) => {
        var response = {}
        if (err) {
            console.log(err)
            return res.status(500).send({ result: err })
        }

        else {
            console.log("data")
            response.success = true
            response.result = data
            return res.status(200).send({ response })
        }






    })



}
