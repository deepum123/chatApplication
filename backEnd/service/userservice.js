var model = require('../app/model/usermodel');
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
module.exports.userServiceLogin=(req,callback)=>
{
    model.userModelLogin(req,(err,data)=>{
        if(err){
            return callback(err)
        }else
        return callback(null,data)
    })
}
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