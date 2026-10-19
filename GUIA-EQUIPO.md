# Guía del equipo · Iron Fit Store

Léanla antes de programar. Si usan IA, **péguenle completa la sección "Estándar"** antes de pedirle código.

## Quién hace qué

| Quién | Rama | Archivos que SOLO esa persona edita |
|---|---|---|
| Víctor | `dev-victor` | `index.html`, `README.md` |
| Joce | `dev-joce` | `css/styles.css`, `img/` |
| César | `dev-cesar` | `js/productos.js` |
| Isaac | `dev-isaac` | `js/carrito.js`, `js/main.js`, `tests/` |

Si necesitas cambiar un archivo que no es tuyo, pídeselo a su responsable por WhatsApp.
Isaac revisa y aprueba lo que entra a `main`.

## Estándar (pégaselo a la IA)

Proyecto: landing page de **Iron Fit Store**, tienda de equipo de fuerza (barras, discos, mancuernas, kettlebells, racks, bancos y máquinas). Nada de ropa, mochilas ni suplementos.
Tecnologías: HTML, CSS, Bootstrap 5.3.8 por CDN y JavaScript puro (sin React, sin frameworks extra).

**1. Forma de cada producto** (en `js/productos.js`, arreglo `productos`):

```js
{
  id: 1,                               // número único, sin repetir
  nombre: "Barra olímpica 20 kg",      // texto
  precio: 3499,                        // número en MXN, sin "$" ni comas
  categoria: "barras",                 // minúsculas, una de la lista de abajo
  imagen: "img/barra-olimpica.jpg",    // ruta dentro de img/, minúsculas y guiones
  descripcion: "Barra de 2.20 m, soporta hasta 300 kg."  // máximo 1 línea
}
```

Categorías permitidas: `barras`, `discos`, `mancuernas`, `kettlebells`, `racks`, `bancos`, `maquinas`.

**2. Forma de cada artículo en el carrito** (lo que se guarda en localStorage):

```js
{ id: 1, nombre: "Barra olímpica 20 kg", precio: 3499, cantidad: 2 }
```

Clave de localStorage: `"carrito"`.

**3. IDs y clases del HTML (no cambiarlos):**

| Selector | Para qué |
|---|---|
| `#productos` | Contenedor donde JS pinta las cards |
| `.btn-agregar` con `data-id="1"` | Botón "Agregar" dentro de cada card |
| `#carrito-lista` | Lista de artículos del carrito |
| `#carrito-total` | Total en pesos |
| `#carrito-contador` | Número de piezas en el navbar |
| `#btn-vaciar` | Botón para vaciar el carrito |

**4. Nombres de funciones (no cambiarlos):**
- `productos.js`: `productos`, `buscarProductoPorId(id)`, `renderProductos(lista)`
- `carrito.js`: `obtenerCarrito()`, `guardarCarrito(carrito)`, `agregarProducto(carrito, producto)`, `quitarProducto(carrito, id)`, `calcularTotal(carrito)`, `contarArticulos(carrito)`, `renderCarrito()`

**5. Reglas de código (la rúbrica las califica):**
- Sangría de 2 espacios.
- Nombres en español y descriptivos (`precioTotal`, no `x`).
- **Comentarios** en HTML, CSS y JS explicando cada sección o función.
- Funciones cortas que hagan una sola cosa.
- Colores y fuentes solo con las variables de `:root` en `styles.css`.
- Nada de `onclick` en el HTML: los eventos van con `addEventListener`.

## Flujo de Git

**Una sola vez (al empezar):**
```
git clone https://github.com/ChanisBlu/IronFitStore-Hackaton-1.git
cd IronFitStore-Hackaton-1
git switch -c dev-TUNOMBRE
git push -u origin dev-TUNOMBRE
```

**Cada vez que termines algo que funciona:**
```
git add .
git commit -m "Qué hiciste, en corto"
git push
```
Luego en GitHub: **Compare & pull request**, con base `main` y compare `dev-TUNOMBRE`. Avisa en WhatsApp.

**Después de que se aprueba un PR de cualquiera (para traer lo nuevo):**
```
git switch main
git pull
git switch dev-TUNOMBRE
git merge main
```

## Cómo se decide si algo entra a main (lo revisa Isaac)

```
git fetch
git switch dev-NOMBRE
git pull
```
Abrir con Live Server y revisar:

- [ ] La página abre y en F12 > Console **no hay errores en rojo**.
- [ ] Solo se tocaron los archivos de esa persona.
- [ ] Respeta el estándar (forma del producto, IDs y nombres de funciones).
- [ ] Se ve bien en celular (F12 > ícono de celular).
- [ ] Tiene comentarios.
- [ ] Lo que ya funcionaba sigue funcionando (agregar al carrito y recargar).
- [ ] Si tocó JS: `npm test` pasa.

Todo bien: **Merge pull request** en GitHub. Algo falla: se deja un comentario en el PR con qué corregir.

## Horario

| Bloque | Qué |
|---|---|
| 0:00 a 0:30 | Ramas creadas, paleta y nombre listos |
| 0:30 a 2:30 | Cada quien su parte |
| 2:30 | Checkpoint 1: integrar en main, flujo básico funcionando |
| 2:30 a 4:30 | Animaciones, responsivo, errores, pruebas |
| 4:30 a 5:30 | Revisión final, comentarios, README |
| 5:30 | Entrega del link en Canvas (actividad 31.2) |

Check-in cada hora por la sala (5 min). Si te atoras más de 15 minutos, avisa.
