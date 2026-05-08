function paresEnRango(inicio, fin){
    let array = []

    if (verify(inicio, fin)){
        for(let i = inicio ; i <= fin ; i++){
            if (i % 2 == 0){
                array.push(i)
            }
        }
        return array;
    }

    return 'accion incompleta'
}

function verify (inicio, fin){
    if (inicio < fin){
        return true
    }

    return false;
}

console.log(paresEnRango(20, 50))