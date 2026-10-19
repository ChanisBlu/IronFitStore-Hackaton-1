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
  },
  {
    id: 3,
    nombre: "Mancuernas hexagonales 15 kg (par)",
    precio: 1599,
    categoria: "mancuernas",
    imagen: "img/mancuernas-hexagonales-15.jpg",
    descripcion: "Mancuernas hexagonales de 15 kg, material de alta calidad."
  },
  {
    id: 4,
    nombre: "Kettlebell de hierro 16 kg",
    precio: 899,
    categoria: "kettlebells",
    imagen: "img/kettlebell-16.jpg",
    descripcion: "Kettlebell de hierro de 16 kg, ideal para entrenamiento funcional."
  },
  {
    id: 5,
    nombre: "Rack de potencia",
    precio: 12999,
    categoria: "racks",
    imagen: "img/rack-potencia.jpg",
    descripcion: "Rack de potencia con soporte para pesas, ideal para entrenamiento en el gimnasio."
  },
  {
    id: 6,
    nombre: "Banco ajustable",
    precio: 3299,
    categoria: "bancos",
    imagen: "img/banco-ajustable.jpg",
    descripcion: "Banco ajustable con soporte para pesas, ideal para entrenamiento en el gimnasio."
  },
  {
    id: 7,
    nombre: "Máquina de poleas",
    precio: 18999,
    categoria: "maquinas",
    imagen: "img/maquina-poleas.jpg",
    descripcion: "Máquina de poleas para entrenamiento funcional, ideal para gimnasio."
  },
  {
    id: 8,
    nombre: "Barra Z para curl",
    precio: 1299,
    categoria: "barras",
    imagen: "img/barra-z.jpg",
    descripcion: "Barra Z para curl, ideal para entrenamiento de bíceps." 
  },
  {
    id: 9,
    nombre: "Par de discos bumper 20 kg",
    precio: 3299,
    categoria: "discos",
    imagen: "img/discos-bumper-20.jpg",
    descripcion: "Discos de hule de alta densidad, centro de acero."
  },
  {
    id: 10,
    nombre: "Mancuernas ajustables 24 kg (par)",
    precio: 4599,
    categoria: "mancuernas",
    imagen: "img/mancuernas-ajustables-24.jpg",
    descripcion: "Mancuernas ajustables de 24 kg, material de alta calidad."
  },
  {
    id: 11,
    nombre: "Kettlebell competencia 24 kg",
    precio: 1499,
    categoria: "kettlebells",
    imagen: "img/kettlebell-24.jpg",
    descripcion: "Kettlebell de competencia de 24 kg, ideal para entrenamiento funcional."
  },
  {
    id: 12,
    nombre: "Banco plano reforzado",
    precio: 2199,
    categoria: "bancos",
    imagen: "img/banco-plano.jpg",
    descripcion: "Banco plano reforzado con soporte para pesas, ideal para entrenamiento en el gimnasio."
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
  const contenedor = document.getElementById("productos");

  // Error: si el HTML no tiene el contenedor, avisamos y salimos
  if (!contenedor) {
    console.error("No existe #productos en index.html");
    return;
  }

  // Error: si la lista viene vacía, mostramos un mensaje en vez de nada
  if (!lista || lista.length === 0) {
    contenedor.innerHTML = '<p class="text-center">No hay productos disponibles.</p>';
    return;
  }

  // Convertimos cada producto en una card y las unimos en un solo texto
  contenedor.innerHTML = lista.map((producto) => crearCard(producto)).join("");
}

/**
 * Devuelve el HTML de una card de producto.
 * @param {object} producto
 * @returns {string} HTML de la card
 */
function crearCard(producto) {
  const precioFormateado = producto.precio.toLocaleString("es-MX");

  return `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card h-100 producto">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body d-flex flex-column">
          <span class="badge bg-dark align-self-start mb-2">${producto.categoria}</span>
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text small">${producto.descripcion}</p>
          <p class="fw-bold mt-auto">$${precioFormateado} MXN</p>
          <button class="btn btn-warning btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
        </div>
      </div>
    </div>
  `;
}


