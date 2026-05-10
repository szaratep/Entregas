function fusionarObjetos(objA, objB) {
  const resultado = {};

  for (let clave in objA) {
    resultado[clave] = objA[clave];
  }
  for (let clave in objB) {
    resultado[clave] = objB[clave];
  }

  return resultado;
}

console.log(fusionarObjetos({ a: 1, b: 2, d: 25 }, { b: 3, c: 4, f: 30, d: 28 }));