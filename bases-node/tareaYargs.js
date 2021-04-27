const { createArchivo, listarTabla } = require('./multiplicar2/multiplicar2');
const argv = require('yargs')
    .command('listar', 'Imprimir por consola la TB de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crear una TB de multiplicación', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).argv


let comando = argv._[0];

switch (comando) {
    case 'crear':
        createArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado en la ruta: tablas2/${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    default:
        console.log(`comando: ${comando} no reconocido`);
}