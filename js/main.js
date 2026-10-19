/* =========================================================
   main.js · Arranque de la página (responsable: Isaac)
   - Conecta catálogo y carrito con los botones.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Pintar el catálogo y el carrito guardado
  renderProductos(productos);
  renderCarrito();

  // 2. Agregar: un solo "escuchador" para todos los botones .btn-agregar
  document.querySelector("#productos").addEventListener("click", (evento) => {
    const boton = evento.target.closest(".btn-agregar");
    if (!boton) return; // el clic no fue en un botón de agregar

    const id = Number(boton.dataset.id);
    const producto = buscarProductoPorId(id);
    if (!producto) {
      console.error("Producto no encontrado:", boton.dataset.id);
      return;
    }

    guardarCarrito(agregarProducto(obtenerCarrito(), producto));
    renderCarrito(id);
  });

  // 3. Quitar un artículo desde el carrito
  document.querySelector("#carrito-lista").addEventListener("click", (evento) => {
    const boton = evento.target.closest(".btn-quitar");
    if (!boton) return;

    guardarCarrito(quitarProducto(obtenerCarrito(), Number(boton.dataset.id)));
    renderCarrito();
  });

  // 4. Vaciar todo el carrito
  document.querySelector("#btn-vaciar").addEventListener("click", () => {
    guardarCarrito([]);
    renderCarrito();
  });

  // 5. El botón "Carrito" del navbar baja a la sección del carrito
  document.querySelector("#btn-carrito").addEventListener("click", () => {
    document.querySelector("#carrito").scrollIntoView({ behavior: "smooth" });
  });
});
