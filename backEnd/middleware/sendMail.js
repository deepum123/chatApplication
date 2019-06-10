const nodemailer=require('nodemailer');
try{
exports.sendEMailFunction = (url,email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'deepum648@gmail.com',
            pass:''
        },
    });
    const mailOptions = {
        from:'deepum648@gmail.com',    
        to: email,
        subject: 'Chat-app password reset link ',      
        text: 'Please go through the e-mail verifaction link provided in this mail:\n\n'+url 
    };
    transporter.sendMail(mailOptions,(err,info) => {
       
        if (err){
        console.log("is it is invalid");
        
            console.log("error on sending mail--", err)
        }
        else
            console.log('result of sending mail-- ',info);
    });
    
}
}catch (err) {
    console.log("error in middleware send mailer")
}
