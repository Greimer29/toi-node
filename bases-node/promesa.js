const { rejects } = require("assert");
const { Console } = require("console");

let empleado = [{
        id: 1,
        nombre: 'GreimerKmón'
    },
    {
        id: 2,
        nombre: 'Grima'
    },
    {
        id: 3,
        nombre: 'Gremoso'
    }
];
let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];


let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {

        let empleadoDB = empleado.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`no existe un empleado con el Id ${id}`);
        } else {
            resolve(empleadoDB);
        }

    });

};

getEmpleado(3).then(empleado => {
    console.log('Émpleado de BD ', empleado.id, empleado.nombre);
}, (err) => {
    console.log(err);
});