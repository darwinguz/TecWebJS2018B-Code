// 02-observables.ts
var rxjs = require('rxjs');
var map = require('rxjs/operators').map;
var distinct = require('rxjs/operators').distinct;
var concat = require('rxjs/operators').concat;
var numeros$ = rxjs.of(1, "Adrian", "Adrian", 1, true, true, 1, { nombre: 'Adrian' }, 1, [1, 2, 3], new Date());
var promesita = function (correcto) {
    return new Promise(function (resolve, reject) {
        if (correcto) {
            resolve(':)');
        }
        else {
            reject(':(');
        }
    });
};
var promesita$ = rxjs.from(promesita(true));
var promesitaNoOk$ = rxjs.from(promesita(true));
numeros$
    .pipe(concat(promesitaNoOk$), // Reject
concat(promesita$))
    .pipe(distinct(), map(function (valorActual) {
    return {
        data: valorActual
    };
}))
    .subscribe(function (ok) {
    console.log('En ok', ok);
}, function (error) {
    console.log('Error', error);
}, function () {
    console.log('Completado');
});
