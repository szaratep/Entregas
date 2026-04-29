//obtener todos los productos de la url

const api = 'https://fakeapi.net/products'

try{
    const response = await fetch(api);
    const productos = await response.json();

    console.log(getproduct(productos));
}catch( error ){
    console.log(error)
}

function getproduct (products){
    let total = 0;

    for (let i = 0 ; i < products.data.length ; i++){
        total = calculate(products.data[i].price, products.data[i].stock) ;
        print(products.data[i].title, products.data[i].stock, total);
    }
}

function calculate (precio, stock){
    return precio * stock;
}

function print(producto, stock, total){
    console.log(`El producto ${producto}, su stock es ${stock}, y el total del precio * stock es: ${total}`)
}
