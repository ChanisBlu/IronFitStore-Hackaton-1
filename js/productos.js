/* =========================================================
   productos.js · Catálogo (responsable: César)
   - Aquí viven TODOS los productos de la tienda.
   - Cada producto sigue el estándar de GUIA-EQUIPO.md.
   ========================================================= */

// Lista de productos (ejemplos: César completa hasta 8 a 12)
const productos = [
  {
    id: 1,
    nombre: "Barra olímpica 20 kg",
    precio: 3499,
    categoria: "barras",
    imagen: "img/barra-olimpica.jpg",
    descripcion: "Barra de 2.20 m, soporta hasta 300 kg."
  },
  {
    id: 2,
    nombre: "Par de discos bumper 10 kg",
    precio: 1899,
    categoria: "discos",
    imagen: "img/discos-bumper-10.jpg",
    descripcion: "Discos de hule de alta densidad, centro de acero."
  }
];

/**
 * Busca un producto por su id.
 * @param {number} id
 * @returns {object|undefined} el producto o undefined si no existe
 */
function buscarProductoPorId(id) {
  return productos.find((producto) => producto.id === id);
}

/**
 * Pinta una card por cada producto dentro de <div id="productos">.
 * Cada card DEBE tener un botón: <button class="btn-agregar" data-id="ID">
 * @param {Array} lista productos a mostrar
 */
function renderProductos(lista) {
  // TODO César: limpiar #productos y crear una card por producto
}
