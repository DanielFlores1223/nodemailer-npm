const nodemailer = require('nodemailer');
const { credentials } = require('../config/credentials');


/*

*/
const sendEmail = (req, res) => {
     const { subject, message, to } = req.body;

     const { email, password, service } = credentials;
     
     const transporter = nodemailer.createTransport({
          service,
          auth: {
            user: email,
            pass: password
          }
        });
        //
     const mailOptions = {
          from: email,
          to,
          subject,
          text: message
        };
        //
     transporter.sendMail(mailOptions, function(error, info){
       if (error) {
         console.log(error);
         res.status(400).send({ success: false, result: `Emain didn't send` });
       } else {
         console.log('Email enviado: ' + info.response);
         res.send({ success: true, result: `Email sent to ${to}` });
       }
     });

}


module.exports = {
     sendEmail
}