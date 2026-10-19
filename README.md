# Iron Fit Store

Landing page interactiva de una tienda de equipamiento deportivo enfocada en fuerza y entrenamiento en casa.

Proyecto desarrollado durante el **Hackatón 1 de Generation México**, grupo Java Full Stack CH73.

## Objetivo

Crear una página web atractiva, intuitiva y responsiva que permita explorar productos deportivos e interactuar con un carrito de compras.

## Funcionalidades

- Catálogo de productos generado dinámicamente con JavaScript.
- Tarjetas de productos con información e imágenes.
- Carrito de compras con opción para agregar y quitar productos.
- Actualización del contador y del total de la compra.
- Persistencia del carrito mediante `localStorage`.
- Diseño responsivo y animaciones CSS.
- Pruebas unitarias del carrito con Jest.

## Tecnologías

- HTML5: estructura y contenido de la página.
- CSS3: estilos, animaciones y diseño responsivo.
- Bootstrap 5.3.8: componentes y herramientas de diseño.
- JavaScript: catálogo, interacciones y carrito.
- localStorage: persistencia de los datos del carrito.
- Jest: pruebas unitarias.

## Cómo ejecutar el proyecto

1. Clona el repositorio y abre la carpeta en Visual Studio Code.
2. Abre `index.html` con la extensión **Live Server**.
3. Para ejecutar las pruebas, instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta las pruebas con:

   ```bash
   npm test
   ```

   Estos comandos requieren que Node.js esté instalado y que `package.json` tenga configurado el script `test`.

## Estructura del proyecto

```text
IronFitStore-Hackaton-1/
├── css/
│   └── styles.css
├── img/
├── js/
│   ├── productos.js
│   ├── carrito.js
│   └── main.js
├── tests/
│   └── carrito.test.js
├── index.html
├── package.json
├── README.md
└── GUIA-EQUIPO.md
```

## Equipo y responsabilidades

| Integrante | Responsabilidad | Archivos principales |
|---|---|---|
| Víctor Manuel Montaño | Estructura HTML e integración final | `index.html`, `README.md` |
| Jocelin Bernal | Diseño visual, CSS, responsividad y animaciones | `css/styles.css` |
| César Nápoles | Datos del catálogo y tarjetas de productos | `js/productos.js` |
| Isaac Razo | Carrito, persistencia y pruebas | `js/carrito.js`, `tests/carrito.test.js` |

## Estado del proyecto

Proyecto académico en desarrollo. Las funcionalidades y pruebas deben validarse durante la integración final del equipo.
