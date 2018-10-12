//JAVA int edad = 10; tipado

//no tipado
var edad = 10;
var edadString = "10";
var sueldo = 1.234;
var casado = false;
var hijos = null;
var dato = undefined;
var dato2;
var fechaNacimiento = new Date();

console.log('hola mundo!');

console.log('edad', typeof edad);
console.log('edadString', typeof edadString);
console.log('sueldo', typeof sueldo);
console.log('casado', typeof casado);
console.log('hijos', typeof hijos);
console.log('dato valor', dato);
console.log('dato tipo', typeof dato);
console.log('dato2', typeof dato2);
console.log('fechaNacimiento', typeof fechaNacimiento);

//objeto json (tipo object)
var darwin = {
    "nombre": 'Darwin',
    'segundoNombre': `Santiago`,
    apellidoPaterno: `Guzman`,//con `` en la clave no funca
    apellidoMaterno: 'Alarcon',
    edad: 22,
    casado: false,
    hijos: null,
    mascotas: {
        nombre: "Pinino"
    }
};

console.log(darwin.mascotas.nombre);
delete darwin.hijos; //se elimina el atributo completo key-value

//agrego atributo tio al objeto
darwin.tio = {
    nombre: '??'
};
console.log(darwin);

if (true) {
    console.log("Si") //
} else {
    console.log("No")
}

if (false) {
    console.log("Si")
} else {
    console.log("No") //
}

if (1) { // Truthy
    console.log("Si")
} else {
    console.log("No")
}

if (0) { // Falsy
    console.log("Si")
} else {
    console.log("No")
}

if (-1) { // Truthy (cualquier numero diferente de 0 es true)
    console.log("Si")
} else {
    console.log("No")
}

if ("") { // Falsy
    console.log("Si")
} else {
    console.log("No")
}

if ("a") { // Truthy
    console.log("Si")
} else {
    console.log("No")
}


if (null) { // Falsy
    console.log("Si")
} else {
    console.log("No")
}

if ({nombre: 'adrian'}) { // Truthy
    console.log("Si")
} else {
    console.log("No")
}

if (new Date()) { // Truthy
    console.log("Si")
} else {
    console.log("No")
}


if (undefined) { // Falsy
    console.log("Si")
} else {
    console.log("No")
}