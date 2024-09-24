const fs = require("fs");

//Metodo para leer archivos
console.log("Antes de leer el archivo");

const contenido = fs.readFileSync("index.html", "utf-8");
console.log(contenido);

console.log("Despues de leer el archivo");

//Metodo para renombrar archivos
fs.renameSync("index.html", "main.html", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Nombre cambiado exitosamente");
  }
});

console.log("Despues de cambiar el nombre del archivo");

// Metodo para agregar contenido al final de un archivo
fs.appendFileSync("main.html", "<p>Hola<p>", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Archivo Actualizado");
  }
});

console.log("Despues de agregar contenido al archivo");

//Metodo para remplazar todo el contenido de un archivo
fs.writeFileSync("main.html", "Contenido Nuevo", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Contenido remplazado Exitosamente");
  }
});

console.log("Despues de remplazar el contenido del archivo");

//Metodo para eliminar archivos
fs.unlinkSync("main.html", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Archivo Eliminado");
  }
});

console.log("Despues de eliminar el archivo");
