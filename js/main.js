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
    document.querySelector("#carrito").classList.add("is-abierto"); // muestra lo agregado
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

  // 5. Abrir y cerrar el panel del carrito (el CSS lo muestra con .is-abierto)
  const panelCarrito = document.querySelector("#carrito");
  const botonCarrito = document.querySelector("#btn-carrito");

  // Botón ✕ para cerrar, creado con JS para no tocar el HTML
  const botonCerrar = document.createElement("button");
  botonCerrar.type = "button";
  botonCerrar.className = "carrito__cerrar";
  botonCerrar.setAttribute("aria-label", "Cerrar carrito");
  botonCerrar.textContent = "✕";
  panelCarrito.prepend(botonCerrar);

  botonCarrito.addEventListener("click", () => panelCarrito.classList.toggle("is-abierto"));
  botonCerrar.addEventListener("click", () => panelCarrito.classList.remove("is-abierto"));

  // Cerrar con la tecla Escape
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") panelCarrito.classList.remove("is-abierto");
  });
});
