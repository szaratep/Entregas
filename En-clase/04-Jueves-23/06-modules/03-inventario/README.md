# 3. Sistema de Gestión de Inventario (E-commerce)

Este ejercicio se enfoca en la transformación de datos y cálculos matemáticos aplicados a un catálogo.

- Archivo `data.js`: Un arreglo de objetos productos con propiedades como nombre, precio, stock y categoria.

- Archivo `logic.js`: Funciones para:

    1. Calcular el precio con un impuesto aplicado (IVA).

    2. Verificar si un producto necesita reposición (si el stock es menor a 5).

    3. Filtrar productos por una categoría específica.

- Archivo `app.js`: Importar los productos y las funciones para mostrar en consola un reporte detallado: `"El producto [Nombre] cuesta $[PrecioTotal] y [Requiere/No requiere] reposición"`.