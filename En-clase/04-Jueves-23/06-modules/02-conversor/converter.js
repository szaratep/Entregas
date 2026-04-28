import { tiposDeCambio } from "./rates.js";

let Cambios = tiposDeCambio;

export function conversionUsd (usd, moneda){
    if (validate(usd)){
        if(moneda == 'COP'){
            let total = 0;
            total = usd * Cambios.USD.COP; 
            return format(total);
        }else{
            let total = 0;
            total = usd * Cambios.USD.EUR; 
            return format(total);
        }
        return null;
    }else{
        return null;
    }
}

export function conversionEur (eur, moneda){
    if (validate(eur)){
        if(moneda == 'COP'){
            let total = 0;
            total = eur * Cambios.EUR.COP; 
            return format(total);
        }else{
            let total = 0;
            total = eur * Cambios.EUR.USD; 
            return format(total);;
        }
        return null;
    }else{
        return null;
    }
}

export function conversionCop (cop, moneda){
     if (validate(cop)){
        if(moneda == 'EUR'){
            let total = 0;
            total = cop * Cambios.COP.EUR; 
            return format(total);
        }else{
            let total = 0;
            total = cop * Cambios.COP.USD; 
            return format(total);
        }
        return null;
    }else{
        return null;
    }
}

function format(usd){
    let format = Number(usd.toFixed(0));
    return format;
}

function validate (usd){
    if(usd <= 0){
        return false;
    }else{
        return true;
    }
}