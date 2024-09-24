function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

// mostrarTema("Node.js");
setTimeout(mostrarTema, 2000, "Node.js"); //ponerle retraso a las funciones para que se ejecuten despues de cierto tiempo, primero se pone la funcion, luego el tiempo, y luego los argunmentoso numeros o textos a enviar
