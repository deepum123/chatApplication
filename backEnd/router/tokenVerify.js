var jwt = require('jsonwebtoken');
var secret = "secret";
try{
module.exports.checkToken = (req, res, next)=> {
    console.log("In auth");
    var token = req.headers["token"];
    console.log(token ,"token is in auth");
Response={succes:false,
    message:"token not valid"
   
}
    if(token)
    {
       jwt.verify(token, secret, (err, decoded) =>{
        if (err) {
            console.log(err)
            
            return res.status(401).send({ Response});
        }
        else {
            console.log("decoded data"+JSON.stringify( decoded));
            req.decoded=decoded;
            next();
        }
    });
}
else{
    return res.send({
        succes:false,
        message:"token not provided"
    })
}
}
}
catch(err)
{
    console.log("found error in generating token")
}