const { argv } = require('./config/yargs')


let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log(`${comando} tarea `);
        console.log(`${argv.descripcion}`)
        break;
    case 'actualizar':
        console.log(`${comando} tarea`);
        console.log(`Descripción: ${argv.descripcion}`)
        break;
    default:
        console.log(`Comando no encontrado: ${comando}`)
}