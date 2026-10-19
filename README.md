# Iron Fit Store

Landing page interactiva de una tienda de **equipo de fuerza**: barras, discos, mancuernas, kettlebells, racks, bancos y máquinas.
Hackatón 1 · Generation México · Java Full Stack CH73.

## Funciones
- Catálogo de productos generado con JavaScript.
- Carrito: agregar, quitar, total y contador.
- El carrito se guarda en `localStorage` (sigue ahí al recargar).
- Animaciones y diseño responsivo.
- Pruebas unitarias del carrito con Jest.

## Cómo correrlo
1. Abrir `index.html` con **Live Server** en VS Code.
2. Pruebas: `npm install` y luego `npm test`.

## Estructura
```
index.html          Estructura de la página
css/styles.css      Estilos propios
js/productos.js     Datos del catálogo y cards
js/carrito.js       Lógica del carrito y localStorage
js/main.js          Arranque y eventos
img/                Imágenes de productos
tests/              Pruebas con Jest
```

## Equipo
| Integrante | Rol |
|---|---|
| Víctor Manuel Montaño | Estructura HTML |
| Jocelin Bernal | Diseño y CSS |
| César Nápoles | Catálogo de productos |
| Isaac Razo | Carrito, pruebas e integración |
