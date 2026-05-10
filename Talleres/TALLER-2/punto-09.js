function saludoPersonalizado(name, hour){
    return obtenerRangoHorario(hour)+' '+ name
}

function obtenerRangoHorario(hora){
    if (hora >= 0 && hora <= 23){
        if (hora >= 6 && hora <= 11){
            return 'Buenos días'
        }else if (hora >= 12 && hora <= 17){
            return 'Buenas tardes'
        }else if (hora >= 18 && hora <= 23){
            return 'Buenas noches' 
        }else{
            return '¿Despierto tan temprano?, ¿Despierto aun?'
        }
    }else{
        return 'la hora va desde las 0h hasta las 23h'
    }
}

console.log(saludoPersonalizado("Ana", 9));
console.log(saludoPersonalizado("Luis", 15));