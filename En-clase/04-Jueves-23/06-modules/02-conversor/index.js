import { conversionCop, conversionUsd, conversionEur } from "./converter.js";
import { gastos } from "./main.js";

let price = gastos
let total = 0;

for(let i = 0; i < price.length; i++){
    if (price[i].moneda == 'COP'){
        total += price[i].monto;
    }else if(price[i].moneda == 'USD'){
        let result = conversionUsd(price[i].monto, 'COP');
        if (result != null){
            total += result;
        }else{
            console.log('moneda invalido')
        }
    }else if(price[i].moneda == 'EUR'){
        let result = conversionEur(price[i].monto, 'COP');
        if (result != null){
            total += result;
        }else{
            console.log('moneda invalido')
        }
    }
};

console.log(`Todos los gastos en COP son: ${total}`)

