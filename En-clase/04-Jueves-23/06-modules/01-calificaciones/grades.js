export function calcularPromedio(notas){
    if(validate(notas)){
        let promed = promedio(suma(notas), notas);
        return promed
    }else{
        return null;
    };
};

function suma ( notas ){
    let suma = 0 ;
    for(let value of notas){
        suma += value
    }

    return suma
};

function promedio (suma, notas){
    let promed = 0;
    return promed = suma / notas.length;
};

function validate( notas ){
    for(let i = 0; i < notas.length; i++){
        if (notas[i] < 0 || isNaN(notas[i])){
            return false; 
        };
    };
    return true;
};

export function obtenerEstado (promedio){
    if (promedio >= 3.0){
        return 'aprobado'
    }
    
    return 'reprobado'
}