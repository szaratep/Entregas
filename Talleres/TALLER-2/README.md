# Taller Funciones II

### 1. Números pares en rango
Crea una función `paresEnRango(inicio, fin)` que devuelva un array con todos los números pares entre inicio y fin (ambos incluidos si corresponden).

```javascript
// Ejemplo:
paresEnRango(1, 10) // → [2, 4, 6, 8, 10]
paresEnRango(5, 5)  // → [] 
```

### 2. Filtrar palabras largas

Crea una función `palabrasLargas(palabras, longitudMinima)` que reciba un array de strings y un número, y devuelva un nuevo array solo con las palabras que tengan longitud mayor o igual a longitudMinima.

```javascript
// Ejemplo:
palabrasLargas(["hola", "sol", "elefante", "mar"], 5) 
// → ["elefante"]
```

### 3. Suma de números impares

Crea una función sumaImpares(numeros) que reciba un array de números y devuelva la suma solo de los números impares.

```javascript
// Ejemplo:
sumaImpares([1, 2, 3, 4, 5]) // → 9  (1+3+5)
sumaImpares([10, 15, 20, 25]) // → 40 (15+25)
```

### 4. Contar vocales en una frase

Crea una función `contarVocales(frase)` que devuelva un objeto con la cantidad de a, e, i, o, u (sin distinguir mayúsculas).

```javascript
// Ejemplo:
contarVocales("Hola mundo") 
// → { a: 1, e: 0, i: 0, o: 2, u: 1 }
```

### 5. Fusionar dos objetos en uno

Crea una función `fusionarObjetos(objA, objB)` que devuelva un nuevo objeto con todas las propiedades de ambos. Si hay claves repetidas, gana objB.

```javascript
fusionarObjetos({ a: 1, b: 2 }, { b: 3, c: 4 }) // → { a: 1, b: 3, c: 4 }
```

### 6. Extraer dominio de un email (versión simple)

Crea una función `extraerDominio(email)` que devuelva todo lo que está después del @.

```javascript
extraerDominio("ana@gmail.com") // → "gmail.com"
```

### 7. ¿Es múltiplo de 3?

Crea una función `esMultiploDe3(numero)` que devuelva true o false.

```javascript
esMultiploDe3(9)  // → true
esMultiploDe3(10) // → false
```

### 8. Factorial
📖 Explicación del concepto (¡importante!)

El factorial es una operación matemática que se escribe con un signo de exclamación ! y significa: multiplicar un número por todos los enteros positivos menores que él hasta llegar a 1.
Ejemplos:

    5! = 5 × 4 × 3 × 2 × 1 = 120
    4! = 4 × 3 × 2 × 1 = 24
    3! = 3 × 2 × 1 = 6
    2! = 2 × 1 = 2
    1! = 1
    0! = 1 (por definición, ¡esto es importante!)

**¿Para qué sirve el factorial?**

Se usa mucho en probabilidad, combinaciones y permutaciones. Por ejemplo: ¿de cuántas formas diferentes puedes ordenar 5 libros en un estante? Respuesta: 5! = 120 formas.

**Ahora el Enunciado**

Crea una función `factorial(n)` que reciba un número entero n (mayor o igual a 0) y devuelva su factorial.

```javascript
// Ejemplos:
factorial(5);  // → 120
factorial(4);  // → 24
factorial(1);  // → 1
factorial(0);  // → 1 (¡caso especial!)
```

### 9. Generador de saludos según el horario

Crea:
- `obtenerRangoHorario(hora)` → "mañana" (6-11), "tarde" (12-17), "noche" (18-23), "madrugada" (0-5).
- `saludoPersonalizado(nombre, hora)` → devuelve "Buenos días [nombre]", etc., usando obtenerRangoHorario.

```javascript
saludoPersonalizado("Ana", 9)  // → "Buenos días Ana"
saludoPersonalizado("Luis", 20) // → "Buenas noches Luis"
```

### 10. FizzBuzz (Clásico)

Crea una función `fizzBuzz()` que no reciba parámetros y que imprima en consola (con `console.log`) los números del 1 al 100 aplicando las reglas de FizzBuzz.

```
// Ejemplo de lo que debe mostrar en consola:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// ... y así hasta el 100
```

***Reglas***

| Número | ¿Múltiplo de 3? | ¿Múltiplo de 5? | ¿Múltiplo de 3 y 5? | ¿Qué imprimir? |
|--------|----------------|----------------|---------------------|----------------|
| 1      | No             | No             | No                  | `1`            |
| 2      | No             | No             | No                  | `2`            |
| 3      | Sí             | No             | No                  | `"Fizz"`       |
| 4      | No             | No             | No                  | `4`            |
| 5      | No             | Sí             | No                  | `"Buzz"`       |
| 6      | Sí             | No             | No                  | `"Fizz"`       |
| 7      | No             | No             | No                  | `7`            |
| 8      | No             | No             | No                  | `8`            |
| 9      | Sí             | No             | No                  | `"Fizz"`       |
| 10     | No             | Sí             | No                  | `"Buzz"`       |
| 11     | No             | No             | No                  | `11`           |
| 12     | Sí             | No             | No                  | `"Fizz"`       |
| 13     | No             | No             | No                  | `13`           |
| 14     | No             | No             | No                  | `14`           |
| 15     | Sí             | Sí             | Sí                  | `"FizzBuzz"`   |
| 30     | Sí             | Sí             | Sí                  | `"FizzBuzz"`   |
| 45     | Sí             | Sí             | Sí                  | `"FizzBuzz"`   |
| 99     | Sí             | No             | No                  | `"Fizz"`       |
| 100    | No             | Sí             | No                  | `"Buzz"`       |

