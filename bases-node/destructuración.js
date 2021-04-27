let deadpool = {
    nombre: 'wade',
    apellido: 'wilson',
    poder: 'regeneración',

    getNombre: function() {
        return `${this.nombre} ${this.apellido} -Poder ${this.poder}`;
    }
};

console.log(deadpool.getNombre());

/* para extraer las propiedades de deadpool como variables a parte.

let nombre = deadpol.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder;

console.log(nombre, apellido, poder)
*/

//todo lo de arriba resumido en una linea.
let { nombre: primernombre, apellido, poder } = deadpool;

console.log(primernombre, apellido, poder)