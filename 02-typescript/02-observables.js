var rxjs = require('rxjs');
var numeros$ = rxjs.of(1, 2, 3, 4, 5, 6);
console.log(numeros$);
numeros$.subscribe(function (ok) {
    console.log('En ok', ok);
}, function (error) {
    console.log('Error', error);
}, function () {
    console.log('Completado');
});
