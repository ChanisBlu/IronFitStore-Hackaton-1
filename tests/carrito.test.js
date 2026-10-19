/* =========================================================
   Pruebas del carrito con Jest (responsable: Isaac)
   Correr con: npm test
   ========================================================= */
const carrito = require("../js/carrito.js");

// Productos de prueba (mismo estándar que productos.js)
const barra = { id: 1, nombre: "Barra olímpica 20 kg", precio: 3499, categoria: "barras", imagen: "img/barra-olimpica.jpg" };
const discos = { id: 2, nombre: "Par de discos bumper 10 kg", precio: 1899, categoria: "discos", imagen: "img/discos-bumper-10.jpg" };

test("Agregar un producto a un carrito vacío lo deja con cantidad 1", () => {
  const resultado = carrito.agregarProducto([], barra);
  expect(resultado.length).toBe(1);
  expect(resultado[0].cantidad).toBe(1);
});

test("Agregar el mismo producto dos veces sube la cantidad a 2", () => {
  let resultado = carrito.agregarProducto([], barra);
  resultado = carrito.agregarProducto(resultado, barra);
  expect(resultado.length).toBe(1);
  expect(resultado[0].cantidad).toBe(2);
});

test("Agregar no modifica el carrito original", () => {
  const original = [];
  carrito.agregarProducto(original, barra);
  expect(original.length).toBe(0);
});

test("Un producto inválido no se agrega", () => {
  expect(carrito.agregarProducto([], undefined)).toEqual([]);
  expect(carrito.agregarProducto([], { nombre: "Sin id" })).toEqual([]);
});

test("Quitar un producto lo elimina del carrito", () => {
  const conDos = carrito.agregarProducto(carrito.agregarProducto([], barra), discos);
  const resultado = carrito.quitarProducto(conDos, 1);
  expect(resultado.length).toBe(1);
  expect(resultado[0].id).toBe(2);
});

test("Quitar un id que no existe deja el carrito igual", () => {
  const conUno = carrito.agregarProducto([], barra);
  expect(carrito.quitarProducto(conUno, 99)).toEqual(conUno);
});

test("Un carrito vacío tiene total 0 y 0 piezas", () => {
  expect(carrito.calcularTotal([])).toBe(0);
  expect(carrito.contarArticulos([])).toBe(0);
});

test("El total suma precio por cantidad", () => {
  let resultado = carrito.agregarProducto([], barra);   // 3499
  resultado = carrito.agregarProducto(resultado, barra); // 3499 x 2 = 6998
  resultado = carrito.agregarProducto(resultado, discos); // + 1899
  expect(carrito.calcularTotal(resultado)).toBe(8897);
  expect(carrito.contarArticulos(resultado)).toBe(3);
});

test("El precio se muestra con comas", () => {
  expect(carrito.formatearPrecio(8897)).toBe("8,897");
});
