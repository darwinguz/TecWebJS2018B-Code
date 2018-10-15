function holaMundo() {
    console.log("Hola mundo");
}

console.log(holaMundo());

function sumarDosNumeros(numeroUno, numeroDos) {
    var numeroUnoEsValido = typeof numeroUno == 'number';
    var numeroDosEsValido = typeof numeroDos == 'number';
    if (numeroUnoEsValido && numeroDosEsValido) {
        return numeroUno + numeroDos;
    } else {
        console.error('Parametros no son numeros');
        return 0;
    }

}

console.log(sumarDosNumeros(1, 2, 3, 4, 5, 6, 7)); // 3

console.log(sumarDosNumeros(true, 0, undefined, null, "asd", 6, 7)); // 3

function sumarNNumeros(...numeros) {
    var resultado = calcularResultadoSumarNNumeros(numeros);
    if (resultado.esValido) {
        return resultado.suma;
    } else {
        return 0;
    }
}

function calcularResultadoSumarNNumeros(numeros) {
    var suma = 0;
    var todosLosNumerosSonValidos = true;
    for (var i = 0; i < numeros.length; i++) {
        var numeroEsvalido = typeof numeros[i] == 'number';
        if (numeroEsvalido) {
            suma = suma + numeros[i];
        } else {
            todosLosNumerosSonValidos = false;
            break;
        }
    }
    var resultado = {
        suma: suma,
        esValido: todosLosNumerosSonValidos
    };
    return resultado;
}

console.log(sumarNNumeros(true, 1, 2, 3));

console.log(saludar("AdRiAn", nombreEnMayusculas));
console.log(saludar("AdRiAn", nombreEnMinuscula));
console.log(saludar("AdRiAn", nombreConPuntoAlFinal));

function nombreEnMayusculas(nombre) {
    return nombre.toUpperCase();
}

function nombreEnMinuscula(nombre) {
    return nombre.toLowerCase();
}

function nombreConPuntoAlFinal(nombre) {
    return nombre + ".";
}

var arreglo = [1, 2, 3, 1, 1];

arreglo.findIndex(
    function (valorDelArreglo, indice, arreglo) {
        return 2;
    }
); // 1
















