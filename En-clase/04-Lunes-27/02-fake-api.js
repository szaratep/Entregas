/*
Extraer el listado de productos del siguiente endpoint, y obtener el listado de productos populares. Se considera un producto popular a todo aquel que tenga una calificación (rate), de 4.7 o más, pero que la cantidad de usuarios que hallan votado (count) sea mayor a 100.
https://fakeapi.net/products?limit=20
*/
const api = 'https://fakeapi.net/products?limit=20'

const response = await fetch(api);
const products = await response.json();


try{
    console.log(getproduct(products));
}catch( e ){
    console.log (e);
}


function getproduct (products){
    let list = [];
    let total = 0;

    for (let i = 0 ; i < products.data.length ; i++){
        if (verify(products.data[i].rating.rate, products.data[i].rating.count)){
            list.push(products.data[i]);
        }
    }

    return list;
}

function verify(rate, count){
    if (rate >= 4.7 && count > 100){
        return true;
    }

    return false;
}