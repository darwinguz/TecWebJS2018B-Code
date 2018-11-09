var rxjs = require('rxjs');
var map = require('rxjs/operators').map;
var distinct = require('rxjs/operators').distinct;
var concat = require('rxjs/operators').concat;
var numeros$ = rxjs.of(1, 2, 3, 4, 5, 6);
console.log(numeros$);
numeros$.subscribe(function (ok) {
    console.log('En ok', ok);
}, function (error) {
    console.log('Error', error);
}, function () {
    console.log('Completado');
});
console.log('============================================');
var objeto$ = rxjs.of(1, 1, "Adrian", "Adrian", 1, true, true, { nombre: "Adrian" }, 1, [1, 2, 3], new Date());
objeto$
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
console.log('============================================');
var promesita = function (correcto) { return new Promise(function (resolve, reject) {
    if (correcto) {
        resolve(':)');
    }
    else {
        reject(':(');
    }
}); };
var promesita$ = rxjs.from(promesita(false));
objeto$
    .pipe(concat(promesita$))
    .pipe(distinct(), map(function (valorActual) {
    return {
        data: valorActual
    };
}))
    .subscribe(function (ok) {
    console.log('En promesita1', ok);
}, function (error) {
    console.log('Error en promesita1', error);
}, function () {
    console.log('Completado1');
});
promesita$.subscribe(function (ok) {
    console.log('En promesita1', ok);
}, function (error) {
    console.log('Error en promesita2', error);
}, function () {
    console.log('Completado2');
});
