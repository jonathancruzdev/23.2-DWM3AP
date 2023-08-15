// String
let nombre = 'Juan';
// number
let edad = 23;
// Boolean
let validado = true;
// undefine
let dato = undefined;
// null
let materia = null;
// Arreglos
let materias = ['Programación I', 'Lógica', 'PWA'];



let alumno = {  // OBJETO LITERAL
    // Atributos
    nombre : 'Julieta',
    apellido: 'Ramirez',
    edad: 26,
    // Métodos
    saludar: function(){
        console.log(`Hola soy ${this.nombre}`);
    }
}

class Persona {
    // Atributos
    nombre = '';
    apellido = '';
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    // Methods
    saludar() {
        console.log(`Hola soy ${this.nombre }`);
    }
}
// Creo instancia de la clase Persona
const p1 = new Persona('Mateo', 'Ruiz');
const p2 = new Persona('Luciana', 'Perez');



