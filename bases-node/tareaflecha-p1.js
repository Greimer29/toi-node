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


let getEmpleado = (id, llamada) => {
    let empleadoDB = empleado.find(empleado => empleado.id === id);
    let salarioDB = salarios.find(salarios => salarios.id === id)

    if (!salarioDB) {
        salarioDB = (`Empleado con Id: ${id} sin salario`)
    }
    if (!empleadoDB) {
        llamada(`no existe un empleado con el Id ${id}`);
    } else {
        llamada(null, empleadoDB, salarioDB.salario);
    }
};

getEmpleado(2, (err, empleado, salarios) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado, salarios);
});