const argv = require('yargs')
     .options({
          'e': {
               alias: 'email',
               type: 'string',
               demandOption: true,
               describe: 'Ingresar la base para generar la tabla de multiplicar'
          },
          'p': {
               alias: 'password',
               type: 'string',
               describe: 'Lista la tabla en consola',
               demandOption: true,
          },
          's': {
               alias: 'service',
               type: 'string',
               describe: 'Lista la tabla en consola',
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