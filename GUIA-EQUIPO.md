# Guía del equipo · Iron Fit Store

Léanla antes de programar. Si usan IA, **péguenle completa la sección "Estándar"** antes de pedirle código.

## Quién hace qué

| Quién | Rama | Archivos que SOLO esa persona edita |
|---|---|---|
| Víctor | `dev-victor` | `index.html`, `README.md` |
| Joce | `dev-joce` | `css/styles.css`, `img/` |
| César | `dev-cesar` | `js/productos.js` |
| Isaac | `dev-isaac` | `js/carrito.js`, `js/main.js`, `tests/` |

Si necesitas cambiar un archivo que no es tuyo, pídeselo a su responsable por el chat de Zoom.
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
| `.btn-quitar` con `data-id="1"` | Botón para quitar un artículo del carrito |
| `.item-nuevo` | Clase que JS pone al artículo recién agregado (Joce le da la animación) |
| `.contador-salto` | Clase que JS pone al contador al agregar (Joce le da la animación) |

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

## Palabras de Git que vamos a usar

| Palabra | Qué es, en simple |
|---|---|
| **Repositorio (repo)** | La carpeta del proyecto con todo su historial. Hay una copia en GitHub y una en la compu de cada quien. |
| **origin** | El apodo de la copia que está en GitHub. |
| **main** | La rama oficial. Lo que está aquí es lo que se entrega. Nadie programa directo en main. |
| **Rama** | Una copia del proyecto para trabajar sin romper lo de los demás. Cada quien tiene la suya (`dev-cesar`, etc.). |
| **Commit** | Una "foto" guardada de tus cambios, con un mensaje que dice qué hiciste. |
| **Push** | Subir tus commits de tu compu a GitHub. |
| **Pull** | Bajar de GitHub a tu compu lo que otros subieron. |
| **PR (Pull Request)** | Una solicitud en GitHub que dice: "ya terminé esto en mi rama, ¿lo pasamos a main?". Sirve para que otro lo revise antes de que entre. |
| **Merge** | Juntar los cambios de una rama con otra. |

## Flujo de Git

**Una sola vez (al empezar):**

```
git clone https://github.com/ChanisBlu/IronFitStore-Hackaton-1.git
```
Baja el proyecto de GitHub a tu compu (crea la carpeta).

```
cd IronFitStore-Hackaton-1
```
Entra a esa carpeta en la terminal.

```
git switch -c dev-TUNOMBRE
```
Crea tu rama y te cambia a ella (`-c` = crear). A partir de aquí todo lo que hagas queda en tu rama, no en main.

```
git push -u origin dev-TUNOMBRE
```
Sube tu rama a GitHub para que exista también allá. El `-u` la deja "conectada": de aquí en adelante solo escribes `git push` y ya sabe a dónde subir.

**Cada vez que termines algo que funciona:**

```
git add .
```
Prepara todos tus cambios para guardarlos (el punto = todo).

```
git commit -m "Qué hiciste, en corto"
```
Guarda la foto de tus cambios con un mensaje. Ejemplo: `"Agrega 10 productos al catálogo"`.

```
git push
```
Sube esa foto a tu rama en GitHub.

**Hacer el PR (pedir que tu trabajo entre a main):**
1. Entra al repo en GitHub. Arriba sale un aviso amarillo con el botón **Compare & pull request**. Dale clic.
2. Revisa que diga: **base: `main`** (a dónde va) y **compare: `dev-TUNOMBRE`** (de dónde viene).
3. Escribe en una línea qué hiciste y dale **Create pull request**.
4. Avisa en el **chat de Zoom**: "Subí PR de ___".

**Después de que se aprueba un PR de cualquiera (para traer lo nuevo a tu rama):**

```
git switch main
```
Te cambias a main.

```
git pull
```
Bajas de GitHub la versión más nueva de main.

```
git switch dev-TUNOMBRE
```
Regresas a tu rama.

```
git merge main
```
Metes lo nuevo de main a tu rama, para que tengas el trabajo de todos.

**Antes de cambiar de rama, guarda (Ctrl + S) y haz commit**, si no, Git puede no dejarte cambiar.

## Cómo se decide si algo entra a main (lo revisa Isaac)

```
git fetch
```
Pregunta a GitHub qué ramas y cambios nuevos hay (no cambia tus archivos).

```
git switch dev-NOMBRE
```
Se cambia a la rama de quien hizo el PR.

```
git pull
```
Baja lo último de esa rama.

Abrir con Live Server y revisar:

- [ ] La página abre y en F12 > Console **no hay errores en rojo**.
- [ ] Solo se tocaron los archivos de esa persona.
- [ ] Respeta el estándar (forma del producto, IDs y nombres de funciones).
- [ ] Se ve bien en celular (F12 > ícono de celular).
- [ ] Tiene comentarios.
- [ ] Lo que ya funcionaba sigue funcionando (agregar al carrito y recargar).
- [ ] Si tocó JS: `npm test` pasa.

Todo bien: en el PR de GitHub, botón **Merge pull request** y luego **Confirm merge**. Se avisa en el chat de Zoom para que todos hagan el paso de "traer lo nuevo".
Algo falla: se deja un comentario en el PR con qué corregir. La persona corrige, hace commit y push, y el PR se actualiza solo.

## Horario

| Bloque | Qué |
|---|---|
| 0:00 a 0:30 | Ramas creadas, paleta y nombre listos |
| 0:30 a 2:30 | Cada quien su parte |
| 2:30 | Checkpoint 1: integrar en main, flujo básico funcionando |
| 2:30 a 4:30 | Animaciones, responsivo, errores, pruebas |
| 4:30 a 5:30 | Revisión final, comentarios, README |
| 5:30 | Entrega del link en Canvas (actividad 31.2) |

Comunicación: **chat de Zoom**. Check-in cada hora por la sala (5 min). Si te atoras más de 15 minutos, avisa.
