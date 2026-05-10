function contrasena4Digitos(){
    let contrasena = ''
    for(let i = 0; i < 4; i++){
        contrasena += String(Math.floor(Math.random() * 10));
    }
    return contrasena;
}   

console.log(contrasena4Digitos());