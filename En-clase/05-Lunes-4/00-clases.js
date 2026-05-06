//Crear un algoritmo que capture los datos personales de 5 individuos, estos deberan ser: nombre, edad, genero. Una ves esten capturados en una lista, vamos a contar cuantos son hombres y cuantos son mujeres. Este ejercicio debe realizarse usando clases.

let individuos = [];

class Persona {
    #nombre;
    #edad;
    #genero;

    constructor (nombre, edad, genero){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#genero = genero;
    }

    get nombre (){
        return this.#nombre;
    }

    get edad (){
        return this.#edad;
    }

    get genero (){
        return this.#genero;
    }

    set nombre (nuevoNombre){
        return this.#nombre = nuevoNombre;
    }

    set edad (nuevaEdad){
        return this.#edad = nuevaEdad;
    }

    set genero (nuevoGenero){
        return this.#genero = nuevoGenero;
    }
};

let cont = Number(prompt('Dime cuantas personas quieres añadir'));
let i = 0;

while(i < cont){
    let nombre = String(prompt('dime tu nombre'));
    let edad = Number(prompt('dime tu edad'));
    let genero = String(prompt('dime tu genero'));
    const person = new Persona (nombre, edad, genero);
    individuos.push(person);
    i++; 
}

console.log (individuos);

let mas = 0;
let fem = 0;
let invalid = 0;

for(let value of individuos){
    if(value.genero === 'masculino'){
        mas++;
    }else if (value.genero === 'femenino'){
        fem++;
    }else{
        invalido++;
    }
}

console.log(mas);
console.log(fem);