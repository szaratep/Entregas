let numeros = [42, 7, 19, 3, 88, 25, 14, 67, 1, 56, 31, 9, 73, 28, 5];

function numeroMayor (num){
    let mayor = 0;
    for(let value of num) {
        if(mayor < value){
            mayor = value;
        }
    }
    return mayor;
}

console.log(numeroMayor(numeros));