import { calcularPromedio, obtenerEstado } from "./grades.js";
import { estudiantes } from "./students.js";

let data = estudiantes
let mejor = 0;
let nameMejor = '';

for (let i = 0; i < data.length; i++) {
    let prom = calcularPromedio(data[i].notas);
    if (prom != null) {
        console.log(`el promedio de: ${data[i].nombre} es: ${prom}, estado: ${obtenerEstado(prom)}`)
        if (prom > mejor) {
            mejor = prom
            nameMejor = data[i].nombre
        }
    } else {
        console.log(`Notas invalidas`)
    }
}
console.log(`\nEl/La mejor estudiante es: ${nameMejor}, con un pomedio de ${mejor}`);
