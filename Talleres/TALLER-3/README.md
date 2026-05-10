# Taller Funciones III

Este taller no solo es para que practiques, si no para que aprendas algunas cosas nuevas.

### ¿Qué es Math.random()?
`Math.random()` es una función que devuelve un número decimal aleatorio entre `0` (incluido) y `1` (excluido).

```javascript
console.log(Math.random()); // → 0.472823... (cambia cada vez)
console.log(Math.random()); // → 0.921045...
```

No olvides siempre ir a la documentación oficial, para saber más de [Math.random()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random).


### Generar números en otros rangos

| Quiero...                               | Fórmula                                      | Ejemplo (resultado posible) |
| --------------------------------------- | -------------------------------------------- | --------------------------- |
| Un decimal entre 0 y 10                 | `Math.random() * 10`                         | `7.384`                     |
| Un entero entre 0 y 9                   | `Math.floor(Math.random() * 10)`             | `4`                         |
| Un entero entre 1 y 10                  | `Math.floor(Math.random() * 10) + 1`         | `7`                         |
| Un entero entre `min` y `max` (ambos incluidos) | `Math.floor(Math.random() * (max - min + 1)) + min` | entre 5 y 8: `5, 6, 7, 8` |

### Regla de oro (fórmula universal)
`Math.floor(Math.random() * (max - min + 1)) + min`

### Ejemplo rápido: dado de 6 caras

Vamos a crear el algorítmo de un dado para que al ser lanzado me muestre el valor de una de sus caras, usando `Math.random()`

```javascript
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(lanzarDado()); // → 3, o 5, o 1...
```

### 1. Lanzar una moneda

Crea una función `lanzarMoneda()` que devuelva "cara" o "cruz" al azar (50% cada una).

```javascript
lanzarMoneda(); // → "cara" o "cruz"
```

### 2. Número aleatorio en un rango

Crea una función `numeroAleatorio(min, max)` que devuelva un entero aleatorio entre min y max (ambos incluidos).

```javascript
numeroAleatorio(1, 10); // → 7 (o 3, o 10...)
```

### 3. Dado con mensaje

Crea una función tirarDadoConMensaje() que:
- Genere un número del 1 al 6.
- Devuelva un string como "Sacaste un 4".

```javascript
tirarDadoConMensaje(); // → "Sacaste un 2"
```

### 4. Seleccionar un ganador al azar

Crea una función elegirGanador(nombres) que reciba un array de nombres y devuelva uno al azar.

```javascript
elegirGanador(["Ana", "Luis", "Carlos", "Ema"]); 
// → "Carlos" (puede ser cualquiera)
```

### 5. Simular tirada de dos dados

Crea una función `tirarDados()` que devuelva un objeto:
`{ dado1: 3, dado2: 5, suma: 8 }` (valores aleatorios entre 1 y 6).

```javascript
tirarDados(); // → { dado1: 4, dado2: 2, suma: 6 }
```

### 6. Generar contraseña aleatoria de 4 dígitos

Crea una función `contrasena4Digitos()` que devuelva un string de 4 dígitos aleatorios (cada dígito del 0 al 9).

### 7. Piedra, papel o tijera aleatorio (para la computadora)

Crea una función `jugadaComputadora()` que devuelva "piedra", "papel" o "tijera" al azar.

```javascript
jugadaComputadora(); // → "tijera"
```

### 8. Juego completo: Piedra, papel o tijera contra la computadora

Crea tres funciones que trabajen juntas:

- `jugadaComputadora()` (la del ejercicio 9)
- `determinarGanador(jugadaUsuario, jugadaComputadora)`
- `jugar(jugadaUsuario)` → usa las dos anteriores y devuelve "Ganaste", "Perdiste" o "Empate".

### 9. Número secreto (versión simple)

Crea una función numeroSecreto() que:
- Genere un número aleatorio entre 1 y 5
- Devuelva "¡Adivinaste!" si el número es 3
- Devuelva "Sigue intentando" si no lo 
```javascript
numeroSecreto(); // → "Sigue intentando" (si no salió 3)
```

### 10. Frase aleatoria de ánimo

Crea una función fraseAleatoria() que devuelva una de estas tres frases al azar:
- "¡Tú puedes!"
- "Sigue así"
- "Eres genial"

```javascript
fraseAleatoria(); // → "Sigue así"
```

# ¡Lo NUEVO! Propuesta TC39: Random namespace (Stage 2)

Lo más emocionante es que JavaScript está a punto de tener una API moderna y sencilla para números aleatorios. Está en Stage 2 del proceso TC39 (¡progresando para ser estándar!)

### ¿Cómo luce esta nueva API?
```javascript
// En el futuro (próximamente en JavaScript nativo)

// 🎲 Números enteros (¡adiós Math.floor!)
Random.int(1, 6);        // → 3 (dado de 6 caras)

// 📊 Números decimales
Random.float(0, 1);      // → 0.472 (como Math.random() pero más claro)

// 🔘 Booleanos al azar
Random.boolean();        // → true o false

// 🎯 Elegir elemento de un array
Random.pick(["rojo", "verde", "azul"]);  // → "verde"

// 🔀 Mezclar array
Random.shuffle([1, 2, 3, 4, 5]);  // → [3, 1, 5, 2, 4]

// ∞ Con semilla (resultados reproducibles)
const rng = Random.withSeed(12345);
rng.int(1, 10);  // Siempre dará el mismo resultado con la misma semilla
rng.int(1, 10);  // Secuencia predecible pero "aleatoria"
```

### ¿Por qué es tan buena esta propuesta?
Actualmente para hacer algo simple como un dado, necesitas:
```javascript
// 😓 LO ANTIGUO (actual)
Math.floor(Math.random() * 6) + 1;
```
Con la nueva API:
```javascript
// 😎 LO NUEVO (próximamente)
Random.int(1, 6);
```
¡Mucho más legible y menos propenso a errores! Por ahora debemos esperar, aun no ha sido aceptada, pero es importante estar al día en las cosas que se vienen.