/*Descripción: Hay muchas limitantes a la hora de ejecutar comandos por la consola
para esta aplicación, limitantes de escritura, comandos desconocidos,etc. Para esto
ha llegado yargs, para permitirnos realizar algunas validaciones a la hora de leer
estos comandos ingresados desde la consola.
*/
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
    }).argv


let comando = argv._[0];

switch (comando) {
    case 'crear':
        createArchivo(argv.base)
            .then(archivo => console.log(`archivo creado en la ruta: tablas2/${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    default:
        console.log(`comando: ${comando} no reconocido`);
}