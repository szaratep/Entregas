function palabrasLargas (array, length){
    let wordsLong = [];
    for(let value of array){
        if (value.length >= length){
            wordsLong.push(value);
        }
    }

    return wordsLong
}

console.log(palabrasLargas(["hola", "sol", "elefante", "mar"], 5));
