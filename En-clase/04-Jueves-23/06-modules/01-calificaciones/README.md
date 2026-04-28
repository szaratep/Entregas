# 1. Analizador de Calificaciones Académicas

Este ejercicio introduce lógica de agregación (promedios) y strings dinámicos.

- Archivo `students.js`: Un arreglo de estudiantes, donde cada uno tiene un nombre y un arreglo de notas numéricas.

- Archivo `grades.js`: Funciones para:

   1. `calcularPromedio(notas)`: Recibe el array de notas y retorna el promedio.

   2. `obtenerEstado(promedio)`: Retorna "Aprobado" si es ≥ 3.0, "Reprobado" si es menor.

   3. `encontrarMejorEstudiante(estudiantes)`: (Opcional) Para retar a los más avanzados.

- Archivo `index.js`: Orquestar la lógica para imprimir: `"Estudiante: [Nombre] | Promedio: [Valor] | Estado: [Aprobado/Reprobado]"`.