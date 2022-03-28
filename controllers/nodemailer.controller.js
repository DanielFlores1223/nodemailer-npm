const nodemailer = require('nodemailer');
const { credentials } = require('../config/credentials');


/*
     Está función permite enviar un email, mediante los parametros que se le pasen en el req.body
     @subject : es el asunto del email
     @message  : Mensaje del email
     @to : Destinatario del email
*/
const sendEmail = (req, res) => {
     const { subject, message, to } = req.body;

     const { email, password, service } = credentials;
     
     /* Crear un transportador reusable, el cual es un objeto que permite enviar el mail
        service es el servicio de correo que necesita la cuenta
        auth: 
                user: es el correo de la cuenta
                password: es la contraseña de la cuenta
     */  
     const transporter = nodemailer.createTransport({
          service,
          auth: {
            user: email,
            pass: password
          }
        });

     //Definincion del destinatario, asunto y mensaje 
     const mailOptions = {
          from: email,
          to,
          subject,
          text: message
        };

     //Función que envia el email
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

// se exporta la funcion de enviar email
module.exports = {
     sendEmail
}