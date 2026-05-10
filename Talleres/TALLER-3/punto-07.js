function jugadaComputadora(){
    let options = ['piedra', 'papel', 'tijera'];
    let position = Math.floor(Math.random() * 3);
    return options[position];
}

console.log(jugadaComputadora());