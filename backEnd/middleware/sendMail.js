const nodemailer=require('nodemailer');

exports.sendEMailFunction = (url) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'deepum648@gmail.com',
            pass:'eminememinem'
        },
    });
    const mailOptions = {
        from:'deepum648@gmail.com',    
        to: 'deepum648@gmail.com',
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