//MODULO EVENTS

const EventEmitter = require("events");

const emisorProductos = new EventEmitter();

//definir eventos
emisorProductos.on("compra", (total, numProducts) => {
  console.log(`Total de la compra $${total}`);
  console.log(`Numero de productos ${numProducts}`);
});

//activar eventos para que se ejecuten
emisorProductos.emit("compra", 500, 45);
