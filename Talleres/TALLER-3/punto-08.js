function jugadaComputadora(){
    let options = ['piedra', 'papel', 'tijera'];
    let position = Math.floor(Math.random() * 3);
    return options[position];
}

function determinarGanadaror(jugadaUsuario, jugadaComputadora){
    if (jugadaUsuario === 'piedra' || jugadaUsuario === 'papel' || jugadaUsuario === 'tijera' ){
        if (jugadaComputadora === jugadaUsuario){
            return 'empate'
        }else if (jugadaComputadora === 'piedra' && jugadaUsuario === 'tijera' || jugadaComputadora === 'tijera' && jugadaUsuario === 'papel' || jugadaComputadora === 'papel' && jugadaUsuario === 'piedra'){
            return 'perdiste'
        }else {
            return 'ganaste'
        }
    }else {
        return 'opcion del usuario invalida'
    }
}

function jugar(jugadaUsuario){
    let result = determinarGanadaror(jugadaUsuario.toLowerCase(), jugadaComputadora())
    return result; 
}

console.log(jugar('hola'));