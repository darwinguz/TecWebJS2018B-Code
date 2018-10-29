const fs = require('fs');

function appendFile(nombreArchivo, contenido, callback) {
    fs.readFile(nombreArchivo, 'utf-8', (error, contenidoLeidoDelArchivo) => {
        if (error) {
            fs.writeFile(nombreArchivo, contenido, (err) => {
                if (err) {
                    console.error('Error leyendo...');
                    callback(undefined, 'Error leyendo...');
                } else {
                    //devolver contenido
                    callback(contenido)
                }
            })
        } else {
            fs.writeFile(nombreArchivo, contenidoLeidoDelArchivo + contenido, (err) => {
                if (err) {
                    console.error('Error escribiendo...');
                    callback(undefined, 'Error escribiendo...');
                } else {
                    //devolver contenido
                    callback(contenidoLeidoDelArchivo + contenido);
                }
            })
        }
    });
}

const respuestaAppendFile = appendFile('06-ejemplo.txt', 'Hola amigos', (res, err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});
console.log(respuestaAppendFile);