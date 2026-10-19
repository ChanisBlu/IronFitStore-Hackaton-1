/* =========================================================
   main.js · Arranque de la página (responsable: Isaac + Víctor)
   - Conecta catálogo y carrito. No poner lógica pesada aquí.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Pintar el catálogo y el carrito guardado
  renderProductos(productos);
  renderCarrito();

  // 2. Un solo "escuchador" para todos los botones .btn-agregar
  document.querySelector("#productos").addEventListener("click", (evento) => {
    const boton = evento.target.closest(".btn-agregar");
    if (!boton) return; // el clic no fue en un botón de agregar

    const producto = buscarProductoPorId(Number(boton.dataset.id));
    if (!producto) {
      console.error("Producto no encontrado:", boton.dataset.id);
      return;
    }

    const carrito = agregarProducto(obtenerCarrito(), producto);
    guardarCarrito(carrito);
    renderCarrito();
  });
});
