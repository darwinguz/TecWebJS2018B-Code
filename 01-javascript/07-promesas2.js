const fs = require('fs');


const appendFilePromise = (nombreArchivo, contenido) => new Promise((resolve, reject) => {
    fs.readFile(nombreArchivo, 'utf-8', (error, contenidoLeidoDelArchivo) => {
        if (error) {
            fs.writeFile(nombreArchivo, contenido, (err) => {
                if (err) {
                    reject('Error leyendo...');
                } else {
                    //devolver contenido
                    resolve(contenido)
                }
            })
        } else {
            fs.writeFile(nombreArchivo, contenidoLeidoDelArchivo + contenido, (err) => {
                if (err) {
                    reject('Error escribiendo...');
                } else {
                    //devolver contenido
                    resolve(contenidoLeidoDelArchivo + contenido);
                }
            })
        }
    });
});

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


appendFilePromise('06-ejemplo.txt', 'Hola amigos')
    .then(value => console.log(value))
    .catch(reason => console.log(reason));