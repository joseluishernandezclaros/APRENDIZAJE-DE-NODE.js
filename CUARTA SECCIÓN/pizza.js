const estatusPedido = () => {
  return Math.random() < 0.8; //esto hace que el 80% de las veces salga true y el 20% salga false
};

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("Pedido Exisitoso, Su pizza esta en camino.");
    } else {
      reject("Ocurrio un error. Por favor intente nuevamente");
    }
  }, 3000);
});

const manejarPedido = (mensajeDeConfirmación) => {
  console.log(mensajeDeConfirmación);
};

const manejarRechazo = (mensajeDeError) => {
  console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido).catch(manejarRechazo);

// miPedidoDePizza
//   .then((mensajeDeConfirmación) => {
//     //then para confirmación
//     console.log(mensajeDeConfirmación);
//   })
//   .catch((mensajeDeError) => {
//     //catch para rechazo
//     console.log(mensajeDeError);
//   });
