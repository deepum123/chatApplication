const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs')
var schema = mongoose.Schema;
var userSchema = new schema(
    {
        "firstname": {
            type: String,
            required: [true, 'firstname require plz']
        },
        "lastname": {
            type: String,
            required: [true, 'second name is requied plz']
        },
        "email": {
            type: String,
            required: [true, 'email name is required plz']
        },
        "password": {
            type: String,
            required: [true, 'password is required plz']
        }
    }
    , { timestamps: true })
var user = mongoose.model('users', userSchema);
function usermodule() {

}

function hash(password) {
    var salt = bcryptjs.genSaltSync(10);
    var hashpassword = bcryptjs.hashSync(password, salt)
    return hashpassword;
}
 try{
usermodule.prototype.userModelRegister = (body, callback) => {
    console.log("in model");

    user.find({ 'email': body.email }, (err, data) => {
        if (err) {
            console.log("error in register schema")
            return callback(err)
        }
        else if (data.length > 0) {
            Response = { 'error': true, 'message': " error occured in registration" }
            return callback(Response)
        }
        else {
            var newuser = new user({
                "firstname": body.firstname,
                "lastname": body.lastname,
                "email": body.email,
                "password": hash(body.password)
            })

            newuser.save((err, data) => {
                if (err) {
                    console.log(" error in registration")
                    console.log("error", err)
                    return callback(err)
                } else {
                    console.log("1.firstone model works registration succesfull", data)
                    console.log(body.firstname)
                    callback(null, data)
                }

            })
        }

    })

}
 }catch (err) {
    console.log("error in userModelRegister")
}

 try{
usermodule.prototype.userModelLogin = (body, callback) => {
    console.log("emaiiillllllllllllllll", body);

    user.find({ 'email': body.email }, (err, data) => {
        if (err) {
            return callback(err)
        } else if (data.length > 0) {
            bcryptjs.compare(body.password, data[0].password, (err, res) => {
                if (err) {
                    return callback(err)
                } else if (res) {
                    console.log(data)
                    console.log("login successfully")
                    return callback(null, data)

                } else {
                    console.log("incorrect possword plz check")
                    return callback(" incorrecr pass word").status(500)
                }
            })
        }
        else {
            console.log(body.firstname)
            console.log(body.lastname)
            console.log(" user not thier in database please check")
            return callback("invalid user")

        }
    })


}
}catch (err) {
    console.log("error in userModellogin")
}

try{
usermodule.prototype.userModelForgotpassword = (body, callback) =>
    user.find({ 'email': body.email }, (err, data) => {
        if (err) {
            return callback(err)
        } else if (data) {
            console.log(data)
            return callback(null, data)
        } else
            console.log("invalid email and user")


    })
}catch (err) {
    console.log("error in usermodel forgotpassword")
}


try{
usermodule.prototype.userModelResetPassword = (req, callback) => {
    let newpassword = hash(req.body.password)
    console.log("module block " + req)
    console.log(req.body.password)
    //console.log(JSON.stringify(req.decoded))
    user.updateOne({ '_id': req.decoded.payload.user_id }, { 'password': newpassword }, (err, data) => {
        if (err) {
            console.log("error ")
            return callback(err)
        } else {
            return callback(null, data)
        }
    }
    )
}
}catch (err) {
    console.log("error in usermodel resetpassword")
}
try{
usermodule.prototype.userModelGetAllUsers=(req,callback)=>{
user.find({},(err,data)=>{
      if(err){
          console.log(err+"error occure")
          return  callback(err)
      }else{
        return callback(null,data)
      }

})


}
}catch (err) {
    console.log("error in usermodel get all user")
}

module.exports = new usermodule();