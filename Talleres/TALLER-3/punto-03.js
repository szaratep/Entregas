function tirarDadoConMensaje(){
    let dado = Math.floor(Math.random() *  6) + 1
    return `sacaste un ${dado}` 
}

console.log(tirarDadoConMensaje());