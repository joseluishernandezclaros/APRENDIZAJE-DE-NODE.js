// function restar(a, b) {
//   console.log(a - b);
// }

// setImmediate(restar, 3, 1);

function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

console.log("Antes de setImmediante()");

setImmediate(mostrarTema, "Node.js");

console.log("Despues de setImmediante()");
