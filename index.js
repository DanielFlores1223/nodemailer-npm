const express = require('express');
const { email, password } = require('./config/yargs');

const app = express();
app.use( express.urlencoded({extended:true}) );
app.use( express.json() );
const port = 9000;
const pathApi = '/api/';


//ROUTES
const nodeMailerRoute = require('./routes/nodemailer.route');


//USE ROUTES
app.use(pathApi, nodeMailerRoute);

app.listen(port, () => {
     console.log('App is online, port ', port)
     console.log('API init with: ', email);
 });