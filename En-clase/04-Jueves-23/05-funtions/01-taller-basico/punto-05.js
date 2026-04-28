let colores = ["Rojo", "Azul", "Verde", "Amarillo", "Naranja", "Morado", "Rosa", "Negro", "Blanco", "Gris" ];

function buscarElemeto (array, elemento){
    for (let value of array){
        if (value === elemento){
            return true; 
        }
    }
    return false;
}


if(buscarElemeto(colores, 'lila')){
    console.log('Existe');
}else{
    console.log('No existe');
}
