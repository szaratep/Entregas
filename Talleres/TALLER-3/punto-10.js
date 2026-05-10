function fraseAleatoria(){
    let frases = ['¡Tú puedes!', 'Sigue asi', 'Eres genial']
    let position = Math.floor(Math.random() * 3);
    return frases[position];
}

console.log(fraseAleatoria());