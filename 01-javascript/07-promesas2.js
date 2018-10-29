//resolviendo el problema del ejercicio 06-callback-propio.js con promesas
const fs = require('fs');

const escribirArchivo = (nombreArchivo, contenido) => new Promise((resolve, reject) => {
    fs.writeFile(nombreArchivo, contenido, (error) => {
        if (error) {
            reject('Error leyendo...');
        } else {
            resolve(contenido)
        }
    })
});

const leerArchivo = (nombreArchivo) => new Promise((resolve, reject) => {
    fs.readFile(nombreArchivo, 'utf-8', (error, contenidoLeidoArchivo) => {
        if (error) {
            reject(error);
        } else {
            resolve(contenidoLeidoArchivo)
        }
    });
});

const appendFilePromise = (nombreArchivo, contenido) => new Promise(resolve => {
    leerArchivo(nombreArchivo).then(contenidoLeidoDelArchivo => {
        resolve(escribirArchivo(nombreArchivo, contenidoLeidoDelArchivo + contenido));
    }).catch(() => {
        resolve(escribirArchivo(nombreArchivo, contenido));
    });
});

appendFilePromise('wrad_file.txt', 'aloja')
    .then()
    .then(value => console.log(value))
    .catch(reason => console.log(reason));
