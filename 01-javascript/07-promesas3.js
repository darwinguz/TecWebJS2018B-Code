//resolviendo el problema del ejercicio 06-callback-propio.js con async await
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


const appendFilePromiseAsyncAwait = async (nombreArchivo, contenido) => {
    try {
        const contenidoLeidoDelArchivo = await leerArchivo(nombreArchivo);
        return await escribirArchivo(nombreArchivo, contenidoLeidoDelArchivo + contenido);
    } catch (e) {
        console.log(e);
        return await escribirArchivo(nombreArchivo, contenido);
    }
};

appendFilePromiseAsyncAwait('wrad_file.txt', 'holakase...')
    .then(value => console.log(value))
    .catch(reason => console.log(reason));
