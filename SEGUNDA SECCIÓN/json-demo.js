// const curso = require("./curso.json");

// console.log(curso.titulo);
// console.log(curso.temas);

// PARA ENVIAR INFORMACIÓN ES MEJOR QUE SEA DE TIPO STRING Y LUEGO SE CONVIERTE AL LLEGAR A SU DESTINO A FORAMTO JSON

let infocurso = {
  titulo: "Aprende Node.js",
  numVistas: 45642,
  numLikes: 21123,
  temas: ["javascript", "Node.js"],
  esPublico: true,
};

// Se esta pasando de un objeto a una cadena de caracteres
// Cadena de caracteres en formato JSON
let infocursoJSON = JSON.stringify(infocurso);

console.log(infocursoJSON);
console.log(typeof infocursoJSON);

// Cadena de caracteres (string) -> Objeto JavaScript
let infocursoObjeto = JSON.parse(infocursoJSON);
console.log(infocursoObjeto);
console.log(typeof infocursoObjeto);

console.log(infocursoObjeto.titulo);
