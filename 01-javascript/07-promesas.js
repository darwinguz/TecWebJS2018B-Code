const fs = require('fs');
const nombre = '06-ejemplo.txt';
const nuevaPromesa = (nombreArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (err, contenidoLeidoDelArchivo) => {
                    if (err) {
                        reject(err);
                        console.log('err')
                    } else {
                        resolve(contenidoLeidoDelArchivo);
                        console.log('si')
                    }

                }
            )
        }
    )
};

const nuevaPromesaEscritura = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreArchivo,
                contenidoArchivo,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(contenidoArchivo);
                    }

                }
            )
        }
    )
};

nuevaPromesa(nombre)
    .then(
        (contenido) => {
            console.log(contenido);
            return nuevaPromesaEscritura('07-ejemplo2.txt', contenido + 'Adios amigos');
        }
    )
    .then(
        (contenidoArchivoEscrito) => {
            console.log(contenidoArchivoEscrito);
        }
    )
    .catch(
        (error) => {
            console.log('Catch', error);
        }
    );

//['A','B','C']
//0-A.txt 'A'
//1-B.txt 'B'
//2-C.txt 'C'
const respuesta = {
    nombreArchivo: '',
    contenidoArchivo: '',
    error: ''
};
[respuesta, respuesta, respuesta];


function ejercicio(arregloString, cb) {
    const respuestas = [];
    arregloString.forEach((string, indice) => {
        const nombreArchivo = `${indice}-${string}.txt`;
        const contenido = string;
        fs.writeFile(
            nombreArchivo,
            contenido,
            (err) => {
                const respuesta = {
                    nombreArchivo: nombreArchivo,
                    contenidoArchivo: contenido,
                    error: err
                };
                respuestas.push(respuesta);
                const estaCompletoArreglo = respuestas.length === arregloString.length;
                if (estaCompletoArreglo) {
                    cb(respuestas);
                }
            }
        )
    })
}

ejercicio(['A', 'B', 'C'], (respuestaEjercicio) => {
    console.log(respuestaEjercicio)
});

const escribirArchivo = (nombreArchivo, contenido) => new Promise((resolve, reject) => {
    fs.writeFile(nombreArchivo, contenido, (error) => {
        if (error) {
            reject('Error leyendo...');
        } else {
            resolve(contenido)
        }
    })
});

const ejercicioConPromesas = async (arregloString) => {
    const respuestas = [];
    arregloString.forEach(async (string, indice) => {
        const nombreArchivo = `${indice}-${string}.txt`;
        const contenido = string;
        let errorEscribirArchivo;
        try {
            await escribirArchivo(nombreArchivo, contenido);
        } catch (e) {
            errorEscribirArchivo = e;
        }
        const respuesta = {
            nombreArchivo: nombreArchivo,
            contenidoArchivo: contenido,
            error: errorEscribirArchivo
        };
        respuestas.push(respuesta);
        const estaCompletoArreglo = respuestas.length === arregloString.length;
        if (estaCompletoArreglo) {
            return respuestas;
        }
    })
};
ejercicioConPromesas(['A2', 'B2', 'C2']).then(value => console.log(value)).catch(reason => console.log(reason));

const ejercicioConPromesas2 = async (arregloString) => {
    const respuestas = [];
    await Promise.all(
        arregloString.map(async (string, indice) => {
            const nombreArchivo = `${indice}-${string}.txt`;
            const contenido = string;
            let errorEscribirArchivo;
            try {
                await escribirArchivo(nombreArchivo, contenido);
            } catch (e) {
                errorEscribirArchivo = e;
            }
            const respuesta = {
                nombreArchivo: nombreArchivo,
                contenidoArchivo: contenido,
                error: errorEscribirArchivo
            };
            respuestas.push(respuesta);
        })
    )
    return respuestas;
};
ejercicioConPromesas2(['A3', 'B3', 'C3']).then(value => console.log(value)).catch(reason => console.log(reason));
