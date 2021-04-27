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

let getSalario = (id) => {
    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salarios => salarios.id === id);

        if (!salarioDB) {
            reject(`el empleado no tiene salario`);
        } else {
            resolve(salarioDB);
        }

    });

};


getEmpleado(2).then(empleado => {

    getSalario(empleado.id).then(salarios => {
        console.log(`El salario de ${empleado.nombre} es de ${salarios.salario}`);
    }, (err) => {
        console.log(err);
    });

}, (err) => {
    console.log(err);
});