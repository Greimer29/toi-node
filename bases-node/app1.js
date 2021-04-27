/*Descripción: -.Importar archivo desde nuestro proyecto
crear una función en otro archivo y llamarla desde otro archivo utilizando una 
herramienta de importación. acá empleamos el tercer require(el de ruta = './path')
*/
const { createArchivo } = require('./multiplicar/multiplicar');
let base = '2';

createArchivo(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch(e => console.log(e));