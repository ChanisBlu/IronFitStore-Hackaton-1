/* Pruebas del carrito con Jest (responsable: Isaac). Correr con: npm test */
const carrito = require("../js/carrito.js");

const barra = { id: 1, nombre: "Barra olímpica 20 kg", precio: 3499, categoria: "barras", imagen: "img/barra-olimpica.jpg" };

test("El carrito exporta sus funciones", () => {
  expect(typeof carrito.agregarProducto).toBe("function");
  expect(typeof carrito.calcularTotal).toBe("function");
});

test("Un carrito vacío tiene total 0", () => {
  expect(carrito.calcularTotal([])).toBe(0);
});

// TODO Isaac: agregar, repetir producto (cantidad 2), quitar, total con varios productos
