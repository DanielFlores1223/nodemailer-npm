const { email, password, service} = require('./yargs');

/*
     Si no quieres pasar tus credenciales por consola, puedes modificarlo manualmente este archivo
     email: 'tu correo',
     password: 'tu password',
     service: 'tu servicio (gmail, hotmail, etc)'
*/
const credentials = {
     email,
     password,
     service
}

module.exports = {
     credentials
}