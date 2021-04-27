setTimeout(function() {
    console.log('Hola mundo ingrato')
}, 3000)



let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'GreimerKmón',
        id
    }

    if (id === 20) {
        callback(`El usuario con Id ${id} No existe en la base de datos`);
    } else {

        callback(null, usuario);
    }
}

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('usuario de la base de datos', usuario)
});