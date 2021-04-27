const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            demand: true,
            alias: 'c'
        }
    })
    .help()
    .argv

module.exports = { argv };