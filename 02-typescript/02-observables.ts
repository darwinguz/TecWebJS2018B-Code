//la importacion en ts es diferente, pero este es un lifehack ;)
declare var require: any;
const rxjs = require('rxjs');

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


