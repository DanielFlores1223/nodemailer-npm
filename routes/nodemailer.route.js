const express = require('express');
const router = express.Router();
const controller = require('../controllers/nodemailer.controller')
const path = 'nodemailer'

router.post(`/${path}`, controller.sendEmail);

module.exports = router;