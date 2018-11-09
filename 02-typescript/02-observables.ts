//la importacion en ts es diferente, pero este es un lifehack ;)
declare var require: any;
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;

const numeros$ = rxjs.of(1, 2, 3, 4, 5, 6);

console.log(numeros$);

numeros$.subscribe(
    ok => {
        console.log('En ok', ok);
    },
    error => {
        console.log('Error', error);
    },
    () => {
        console.log('Completado')
    }
);


console.log('============================================');
const objeto$ = rxjs.of(
    1,
    1,
    "Adrian",
    "Adrian",
    1,
    true,
    true,
    {nombre: "Adrian"},
    1,
    [1, 2, 3],
    new Date()
);
objeto$
    .pipe(
        distinct(),
        map(
            (valorActual) => {
                return {
                    data: valorActual
                };
            }
        )
    )
    .subscribe(
        ok => {
            console.log('En ok', ok);
        },
        error => {
            console.log('Error', error);
        },
        () => {
            console.log('Completado')
        }
    );


console.log('============================================');
const promesita = (correcto) => new Promise(
    (resolve, reject) => {
        if (correcto) {
            resolve(':)');
        } else {
            reject(':(');
        }
    }
);

const promesita$ = rxjs.from(promesita(false));

objeto$
    .pipe(
        concat(promesita$)
    )
    .pipe(
        distinct(),
        map(
            (valorActual) => {
                return {
                    data: valorActual
                };
            }
        ))
    .subscribe(
        ok => {
            console.log('En promesita1', ok);
        },
        error => {
            console.log('Error en promesita1', error);
        },
        () => {
            console.log('Completado1')
        }
    );

promesita$.subscribe(
    ok => {
        console.log('En promesita1', ok);
    },
    error => {
        console.log('Error en promesita2', error);
    },
    () => {
        console.log('Completado2')
    }
);