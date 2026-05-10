function contarVocales (text){
    let contA = 0;
    let contE = 0;
    let contI = 0;
    let contO = 0;
    let contU = 0;

    for(let value of text){
        if (value.toUpperCase() === 'A'){
            contA++
        }else if(value.toUpperCase() === 'E'){
            contE++
        }else if(value.toUpperCase() === 'I'){
            contI++
        }else if(value.toUpperCase() === 'O'){
            contO++
        }else if(value.toUpperCase() === 'U'){
            contU++
        }
    }

    return {a: contA, e: contE, i: contI, o: contO, u: contU}
}

console.log(contarVocales('Hola mundo'));