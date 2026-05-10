function sumaImpares (array){
    let sum = 0;
    for(let value of array){
        if(value % 2 !== 0){
            sum += value
        }
    }
    return sum;
}

console.log(sumaImpares([1, 2, 3, 4, 5]));
console.log(sumaImpares([10, 15, 20, 25]));