class Carro {
    #encendido;
    #apagado;
    #motor;
    #acelerador;
    #Freno;
    #ruedas;
    #volante;
    #velocidad;

    constructor (encendido, velocidad = 0, apagado = true){
        this.#encendido = encendido;
        this.#velocidad = velocidad;
        this.#apagado = apagado;
    }

    get acelerador (){
        return this.#acelerador
    }

    set acelerador (push){
        return this.#acelerador = push;
    }

    acelerar (aceleracionV = 1) {
        if(this.#velocidad >= 0 && this.#velocidad < 120 && this.#encendido === true && this.#apagado === false){
            this.#acelerador = true;
            this.#velocidad += aceleracionV; 
            return `el carro acelera ${aceleracionV} km/h, velocidad actual: ${this.#velocidad}`
        }else{
            return 'El carro no puede acelerar mas - no hay velocidades negativas - carro no prendido'
        }
    }

    frenar (reduccionV = 1){
        if ( this.#acelerador != true &&  this.#velocidad > 0 && (this.#velocidad - reduccionV) > 0){
            this.#Freno = true;
            this.#velocidad -= reduccionV;
            return `El auto esta frenando a ${reduccionV} km/h` 
        }else{
            this.#velocidad = 0;
            return `No puedo Frenar mas - No puedes frenar si el auto esta quieto - no puedes frenar si tienes el acelerador puesto - Carro no encendido`
        }
    }
}

const audi = new Carro (true, 0, false);

console.log(audi.acelerar(50));

console.log(audi.acelerador);

audi.acelerador = false

console.log(audi.acelerador)

console.log(audi.frenar(52));


