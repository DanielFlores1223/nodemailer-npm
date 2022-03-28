const argv = require('yargs')
     .options({
          'e': {
               alias: 'email',
               type: 'string',
               demandOption: true,
               describe: 'Ingresa tu email'
          },
          'p': {
               alias: 'password',
               type: 'string',
               describe: 'Ingresa la contraseña de ese email que agregaste',
               demandOption: true,
          },
          's': {
               alias: 'service',
               type: 'string',
               describe: 'Agrega el servicio del email, EX: gmail, hotmail',
               demandOption: true,
          },
     })
     .argv;

const { email, password, service} = argv;

module.exports = {
     email,
     password,
     service
};