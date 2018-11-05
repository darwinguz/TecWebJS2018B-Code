let edad: number | string = 13;
edad = 25;
edad = 'nombre';

let variableLoca: any = '';
variableLoca = false;

//let nombre: string = 'Darwin';
let nombre = 'Darwin';
//duck typing
//nombre = 13; //no se puede asignar xq asume q es un string (ducktyping)

let casado: boolean = false;

//se usa 2 puntos solo para especificar el tipo
let adrian: {//interface: sirven para definir json
    nombre: string;
    apellido?: string;
} = {
    nombre: 'Adrian'
};
let numeros: number[] = [1, 2, 3, 4];

//let numeros2: Array<number>;

let fechaNacimiento: Date = new Date();

let promesa: () => Promise<number> = () => new Promise(
    (resolve, reject) => {
        resolve(1)
    });

function saludar(nombre: string, apellido?: string, ...otrosNombres: string[]): any {
    console.log(nombre);
    return '';
}

//casteo de datos
const temp: number = <number> saludar('WRAD', 'Guzmán', '', '', '', '');

//si no se pone modificador de acceso es public
class Usuario {
    public edad: number;
    nombre; //publico y de tipo any

    constructor() {

    }

    protected saludar(nombre: string): string {
        return nombre;
    }

}

const darwinInstance = new Usuario();


interface UsuarioInterface {
    nombre: string;
    apellido?: string;
}

class UsuarioDummy {
    nombre: string;
    apellido?: string;
}

const vicente: UsuarioDummy = {
    nombre: 'Vicente',
    apellido: 'Eguez'
};






