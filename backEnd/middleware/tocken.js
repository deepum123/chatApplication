const jwt = require('jsonwebtoken');
try{

module.exports={
    GenerateToken(payload){
        const token =jwt.sign({payload},'secret',{expiresIn:'2h'}) //expires in two hours
        const obj = {
            success : true,
            message : 'Token Generated !!',
            token : token
        }
        return obj
    }
}
}catch (err) {
    console.log("error in middleware token.js")
}
