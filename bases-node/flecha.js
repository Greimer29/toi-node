/*function sumar(a, b) {
    return a + b;
}
console.log(sumar(10, 20));
*/

/* función flecha
let sumar = (a, b) => a + b;

console.log(sumar(11, 20));
*/

//funci[on flecha con string 
//let saludo = () => 'adios mundo ingrato';

/*
function saludo(nombre) {
    return `hola ${nombre}`
}
*/

/*función de flecha con parámetro
let saludo = (nombre) => `hola ${nombre}`;
console.log(saludo('greimerkmónsoteeeee'))
*/
//convertir función con objetos en función de flecha
let deadpool = {
    nombre: 'wade',
    apellido: 'wilson',
    poder: 'regeneración',

    getNombre() {
        return `${this.nombre} ${this.apellido} -Poder ${this.poder}`;
    }
};
// al tener este tipo de función no debemos transformarlo a flecha
//ya que el this te indica que estás apuntando a una propiedad de un objeto
//que está fuera.
//por lo tanto queda así: getNombre(){...};
console.log(deadpool.getNombre());