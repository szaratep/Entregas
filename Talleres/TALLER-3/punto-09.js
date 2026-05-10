function numeroSecreto(jugada){
    let secretNumber = Math.floor(Math.random() * 5) + 1
    if (jugada === secretNumber){
        return 'adivinaste';
    }
    return 'sigue intentando';
}

console.log(numeroSecreto(2));