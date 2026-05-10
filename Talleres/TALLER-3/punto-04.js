function tirtarDados(){
    let dado1 = Math.floor(Math.random() *  6) + 1
    let dado2 = Math.floor(Math.random() *  6) + 1
    
    return { Dado1: dado1, Dado2: dado2, total: dado1 + dado2 }
}

console.log(tirtarDados());