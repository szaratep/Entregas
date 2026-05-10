function elegirGanador(array){
    let position = Math.floor(Math.random() * array.length);
    return array[position];
}

console.log(elegirGanador(["Ana", "Luis", "Carlos", "Ema"]))
