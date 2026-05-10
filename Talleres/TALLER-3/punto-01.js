function lanzarMoneda(){
    let moneda = ['Cara', 'Cruz']
    let position = Math.floor(Math.random() * 2);
    return moneda[position];
}

console.log(lanzarMoneda());