const alfabeto = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];


function invertirArrayForma1( array ){
    let alfabetoRevez = []
    for (let value of array){
        alfabetoRevez.unshift(value);
    }
    return alfabetoRevez;
}

function invertirArrayForma2( array ){
    let alfabetoRevez = []
    for (let i = array.length - 1; i >= 0; i--){
        alfabetoRevez.push(array[i]);
    }
    return alfabetoRevez;
}

console.log(invertirArrayForma1(alfabeto));
console.log(invertirArrayForma2(alfabeto));
