/* =========================================================
   carrito.js · Carrito + localStorage (responsable: Isaac)
   - Funciones "puras" (reciben el carrito y regresan uno nuevo)
     para poder probarlas con Jest sin navegador.
   - Clave de localStorage: "carrito"
   ========================================================= */

const CLAVE_CARRITO = "carrito";

/** Lee el carrito guardado. Si no hay nada (o está dañado) regresa []. */
function obtenerCarrito() {
  // TODO Isaac
  return [];
}

/** Guarda el carrito en localStorage como texto JSON. */
function guardarCarrito(carrito) {
  // TODO Isaac
}

/**
 * Agrega un producto. Si ya estaba, solo sube su cantidad.
 * @returns {Array} carrito nuevo
 */
function agregarProducto(carrito, producto) {
  // TODO Isaac
  return carrito;
}

/** Quita un producto por id. @returns {Array} carrito nuevo */
function quitarProducto(carrito, id) {
  // TODO Isaac
  return carrito;
}

/** Suma precio x cantidad de todos los artículos. */
function calcularTotal(carrito) {
  // TODO Isaac
  return 0;
}

/** Cuenta cuántas piezas hay en total (para el contador del navbar). */
function contarArticulos(carrito) {
  // TODO Isaac
  return 0;
}

/** Pinta el carrito en #carrito-lista, #carrito-total y #carrito-contador. */
function renderCarrito() {
  // TODO Isaac
}

// Exportar para Jest (en el navegador "module" no existe y se ignora)
if (typeof module !== "undefined") {
  module.exports = { agregarProducto, quitarProducto, calcularTotal, contarArticulos };
}
