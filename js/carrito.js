/* =========================================================
   carrito.js · Carrito + localStorage (responsable: Isaac)
   - Las funciones de lógica son "puras": reciben el carrito
     y regresan uno NUEVO, sin tocar el original. Así se
     pueden probar con Jest sin navegador.
   - Clave de localStorage: "carrito"
   - Cada artículo: { id, nombre, precio, cantidad }
   ========================================================= */

const CLAVE_CARRITO = "carrito";

/* ---------- Lógica (se prueba con Jest) ---------- */

/**
 * Agrega un producto. Si ya estaba, solo sube su cantidad en 1.
 * @param {Array} carrito carrito actual
 * @param {object} producto producto del catálogo
 * @returns {Array} carrito nuevo
 */
function agregarProducto(carrito, producto) {
  // Validación: si el producto no es válido, no se agrega nada
  if (!producto || typeof producto.id !== "number" || typeof producto.precio !== "number") {
    console.error("Producto inválido, no se agregó:", producto);
    return carrito;
  }

  const yaEsta = carrito.some((articulo) => articulo.id === producto.id);

  if (yaEsta) {
    // Copia el carrito y aumenta la cantidad solo del artículo repetido
    return carrito.map((articulo) =>
      articulo.id === producto.id
        ? { ...articulo, cantidad: articulo.cantidad + 1 }
        : articulo
    );
  }

  // Producto nuevo: se agrega al final con cantidad 1
  const nuevoArticulo = {
    id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
    cantidad: 1
  };
  return [...carrito, nuevoArticulo];
}

/**
 * Quita un artículo completo por su id.
 * @returns {Array} carrito nuevo (sin ese artículo)
 */
function quitarProducto(carrito, id) {
  return carrito.filter((articulo) => articulo.id !== id);
}

/** Suma precio x cantidad de todos los artículos. */
function calcularTotal(carrito) {
  return carrito.reduce((total, articulo) => total + articulo.precio * articulo.cantidad, 0);
}

/** Cuenta cuántas piezas hay en total (para el contador del navbar). */
function contarArticulos(carrito) {
  return carrito.reduce((piezas, articulo) => piezas + articulo.cantidad, 0);
}

/** Da formato de pesos: 3499 se ve como "3,499". */
function formatearPrecio(cantidad) {
  return cantidad.toLocaleString("es-MX");
}

/* ---------- localStorage ---------- */

/** Lee el carrito guardado. Si no hay nada o está dañado, regresa []. */
function obtenerCarrito() {
  try {
    const guardado = localStorage.getItem(CLAVE_CARRITO);
    const carrito = guardado ? JSON.parse(guardado) : [];
    return Array.isArray(carrito) ? carrito : [];
  } catch (error) {
    // Si alguien dejó texto inválido en localStorage, empezamos de cero
    console.error("El carrito guardado estaba dañado, se reinicia:", error);
    localStorage.removeItem(CLAVE_CARRITO);
    return [];
  }
}

/** Guarda el carrito en localStorage como texto JSON. */
function guardarCarrito(carrito) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

/* ---------- Pantalla (DOM) ---------- */

/**
 * Pinta el carrito en #carrito-lista, #carrito-total y #carrito-contador.
 * @param {number} [idNuevo] id del artículo recién agregado (para animarlo)
 */
function renderCarrito(idNuevo) {
  const carrito = obtenerCarrito();
  const lista = document.querySelector("#carrito-lista");
  const total = document.querySelector("#carrito-total");
  const contador = document.querySelector("#carrito-contador");

  lista.innerHTML = "";

  if (carrito.length === 0) {
    lista.innerHTML = "<li class=\"carrito-vacio\">Tu carrito está vacío</li>";
  }

  carrito.forEach((articulo) => {
    const item = document.createElement("li");
    item.className = "carrito-item";
    item.innerHTML = `
      <span>${articulo.nombre} x ${articulo.cantidad}</span>
      <span>$${formatearPrecio(articulo.precio * articulo.cantidad)}</span>
      <button class="btn-quitar" type="button" data-id="${articulo.id}" aria-label="Quitar ${articulo.nombre}">✕</button>
    `;
    // Animación de inserción: Joce define .item-nuevo en styles.css
    if (articulo.id === idNuevo) {
      item.classList.add("item-nuevo");
    }
    lista.append(item);
  });

  total.textContent = formatearPrecio(calcularTotal(carrito));
  contador.textContent = contarArticulos(carrito);

  // Animación del contador: se quita y se vuelve a poner para que se repita
  if (idNuevo !== undefined) {
    contador.classList.remove("contador-salto");
    void contador.offsetWidth; // fuerza al navegador a reiniciar la animación
    contador.classList.add("contador-salto");
  }
}

// Exportar para Jest (en el navegador "module" no existe y se ignora)
if (typeof module !== "undefined") {
  module.exports = { agregarProducto, quitarProducto, calcularTotal, contarArticulos, formatearPrecio };
}
