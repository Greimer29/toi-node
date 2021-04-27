const fs = require('fs'); //El primero, se refiere a todos los componentes que se encuentran dentro de file sistem dentro de node.js
//const fs = require('express'); El Express son las creaciones que otras personas han hecho y que lo dejan abierto al publico
//const fs = require('./path'); Rutas Para utilizar lo que yo tenga en mi pc

let base = 2;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${ base*i }\n`;
};

//const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${ base }.txt ha sido creado `);
});