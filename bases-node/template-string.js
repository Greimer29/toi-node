 let nombre = 'Greimer';
 let real = 'Mustang';

 console.log(nombre + ' ' + real);
 console.log(`Hola, ${nombre} ${real} Bienvenido`);

 let nombreCompleto = nombre + ' ' + real;
 let nombreTemplate = `${nombre} ${real}`;

 console.log(nombreCompleto === nombreTemplate);

 function getnombre() {
     return `El nombre mostrado desde una función ${nombreTemplate}`
 };

 console.log(getnombre());