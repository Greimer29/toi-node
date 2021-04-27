/*Descripción: Clase enviar información desde la línea de comandos.
ingresar en la consola algo, recibirlo por parámetro en este código y de allí
crear la tabla de multiplicación, ingresaremos por la linea de comandos los 
valores para los parametros por medio del objeto process (es como module).
*/

const { createArchivo } = require('./multiplicar2/multiplicar2');

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

createArchivo(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch(e => console.log(e));