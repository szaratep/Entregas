let numeros = [42, 7, 19, 3, 88, 25, 14, 67, 1, 56, 31, 9, 73, 28, 24];

function contarPares(num){
    let pares = 0;
    for(let value of num){
        if(value % 2 === 0){
            pares++;
        }
    }
    return pares;
}

console.log(contarPares(numeros));