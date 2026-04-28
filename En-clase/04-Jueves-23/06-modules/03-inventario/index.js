import { productos } from "./data.js";
import { calcularIva, filtter, needstock } from "./logic.js";

let data = productos;
let stock = '';

for(let value of productos){
    needstock(value.stock) === true ? stock ='Requiere' : stock = 'No requiere'; 
    console.log(`El producto ${value.nombre} cuesta ${calcularIva(value.precio)} y ${stock} reposición`);
}

console.log(filtter(data, 'Regalos'));