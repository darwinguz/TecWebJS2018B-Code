var edad = 13;
edad = 25;
edad = 'nombre';
var variableLoca = '';
variableLoca = false;
//let nombre: string = 'Darwin';
var nombre = 'Darwin';
//duck typing
//nombre = 13; //no se puede asignar xq asume q es un string (ducktyping)
var casado = false;
//se usa 2 puntos solo para especificar el tipo
var adrian = {
    nombre: 'Adrian'
};
var numeros = [1, 2, 3, 4];
//let numeros2: Array<number>;
var fechaNacimiento = new Date();
var promesa = function () {
    return new Promise(function (resolve, reject) {
        resolve(1);
    });
};

function saludar(nombre, apellido) {
    var otrosNombres = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otrosNombres[_i - 2] = arguments[_i];
    }
    console.log(nombre);
    return '';
}

//casteo de datos
var temp = saludar('WRAD', 'Guzmán', '', '', '', '');
//si no se pone modificador de acceso es public
var Usuario = /** @class */ (function () {
    function Usuario() {
    }

    Usuario.prototype.saludar = function (nombre) {
        return nombre;
    };
    return Usuario;
}());
var darwinInstance = new Usuario();
var UsuarioDummy = /** @class */ (function () {
    function UsuarioDummy() {
    }

    return UsuarioDummy;
}());
var vicente = {
    nombre: 'Vicente',
    apellido: 'Eguez'
};
