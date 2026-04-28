let numeros = [42, 7, 19, 3, 88, 25, 14, 67, 1, 56, 31, 9, 73, 28, 5];

function sumarArray (num){
    let total = 0;
    for(let value of num){
        total += value;
    };
    return total;
};

console.log(sumarArray(numeros));