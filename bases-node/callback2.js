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

    if (!empleadoDB) {
        llamada(`no existe un empleado con el Id ${id}`);
    } else {
        llamada(null, empleadoDB);
    }

    //console.log(empleadoDB)
};

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});

let getsalario = (id, llamada) => {
    let salarioDB = salarios.find(salario => salario.id === id);
    if (!salarioDB) {
        llamada(`NO tiene salario el empleado ${id}`);
    } else {
        llamada(null, salarioDB);
    }
};

getsalario(3, (err, salario) => {
    if (err) {
        return console.log(err);
    }
    console.log(salario);
});