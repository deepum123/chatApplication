var model = require('../app/model/usermodel');

try{


module.exports.userServiceRegister=(req,callback)=>{
    console.log("in service");
    model.userModelRegister(req, (err,data)=>{
        if(err)
        {
            return callback(err)
        }
        else
        console.log("2.secondone services",data)
        return callback(null,data)   
    })
}
}catch (err) {
    console.log("error in user servicesRegister")
}

try{
module.exports.userServiceLogin=(req,callback)=>
{
    model.userModelLogin(req,(err,data)=>{
        if(err){
            return callback(err)
        }else
        return callback(null,data)
    })
}
}catch (err) {
    console.log("error in userservice login")
}

try{
module.exports.useServiceForgotPassword=(req,callback)=>
{

    model.userModelForgotpassword(req,(err,data)=>{

        if(err){
            return callback(err)
         
        }else {
            return callback(null,data)

        }

    }
    )
}
}catch (err) {
    console.log("error in userservice fotgotpassword")
}


try{
module.exports.userControllerResetPassword=(req,callback)=>
{
    model.userModelResetPassword(req,(err,data)=>{
        if(err){
            return callback(err)
        }else
        return callback(null,data)
    })
}
}catch (err) {
    console.log("error in userservice reset pass word")
}

try{
module.exports.userServiceGetAllUsers=(req,callback)=>{
    model.userModelGetAllUsers(req,(err,data)=>
{
if(err){
    return callback(err)
}else{
    return callback(null,data)
}

})
}
}catch (err) {
    console.log("error in userservice get all users")
}
