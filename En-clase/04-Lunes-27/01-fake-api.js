//obtener todos los productos de la url

const api = 'https://fakeapi.net/products'

try{
    const response = await fetch(api);
    const productos = await response.json();
    let total = 0;

    for (let i = 0 ; i < productos.data.length ; i++){
        total += productos.data[i].price;
    }

    console.log(total);
}catch( error ){
    console.log(error)
}