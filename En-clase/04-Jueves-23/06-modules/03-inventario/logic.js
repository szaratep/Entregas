export function calcularIva (price){
    return price + (price * 0.19);
};

export function needstock (stock){
    if (stock < 5){
        return true;
    }else{
        return false;
    }
}

export function filtter (products, category){
    let listCategory = [];
    for (let value of products){
        if (value.categoria == category){
            listCategory.push(value);
        }
    }
    return listCategory;
}