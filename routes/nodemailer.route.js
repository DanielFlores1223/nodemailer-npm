const express = require('express');
const router = express.Router();
const controller = require('../controllers/nodemailer.controller')
const path = 'nodemailer'

/*
 Para enviar un email necesitas acceder a esta ruta y manderle mediante el request body 
 subject: es el asunto del email
 message: Mensaje del email
 to: Destinatario del email
*/
router.post(`/${path}`, controller.sendEmail);

module.exports = router;