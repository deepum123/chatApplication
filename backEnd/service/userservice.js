var model = require('../app/model/usermodel');



module.exports.userServiceRegister=(req,callback)=>{
    try{
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

}catch (err) {
    console.log("error in user servicesRegister")
}
}

module.exports.userServiceLogin=(req,callback)=>
{
    try{
    model.userModelLogin(req,(err,data)=>{
        if(err){
            return callback(err)
        }else
        return callback(null,data)
    })

}catch (err) {
    console.log("error in userservice login")
}
}

module.exports.useServiceForgotPassword=(req,callback)=>

{
    try{

    model.userModelForgotpassword(req,(err,data)=>{

        if(err){
            return callback(err)
         
        }else {
            return callback(null,data)

        }

    }
    )

}catch (err) {
    console.log("error in userservice fotgotpassword")
}
}



module.exports.userControllerResetPassword=(req,callback)=>
{
    try{
    model.userModelResetPassword(req,(err,data)=>{
        if(err){
            return callback(err)
        }else
        return callback(null,data)
    })

}catch (err) {
    console.log("error in userservice reset pass word")
}
}


module.exports.userServiceGetAllUsers=(req,callback)=>{
    try{
    model.userModelGetAllUsers(req,(err,data)=>
{
    
if(err){
    return callback(err)
}else{
    return callback(null,data)
}

})

}catch (err) {
    console.log("error in userservice get all users")
}
}