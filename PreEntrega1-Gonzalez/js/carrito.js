// Codigo Ejemplo con modo carrito

import { listajoyas } from "./joyas.js";
import { mostrarProducto } from "./mostrarProductos.js";

let carrito = [];

export function Inicio() {
  let eleccion = parseInt(
    prompt(
      "Que accion desea realizar a su carrito? \n 1.- Agregar Productos. \n 2.- Eliminar Productos. \n  3.- Vaciar Carrito."
    )
  );

  switch (eleccion) {
    case 1:
      agregarProducto();
      console.log(carrito)
      return carrito
      break;
    case 2:
      eliminarProducto();

      break;
    case 3:
      agregarProducto();

      break;
    default:
      alert("Elija una opcion correcta");
      break;
  }
}

function agregarProducto() {
  alert(
    "Elija el producto que le interese agregar o cancelar en caso contrario"
  );
  let objeto = mostrarProducto();
  console.log(objeto);
  // Busca si el objeto existe dentro del carrito
  const index = carrito.findIndex((item) => item.nombre === objeto.nombre);
  if (index === -1) {
    // Si el producto no existe en el carrito, lo agrega con la cantidad especificada
    carrito.push(objeto);
  } else {
    // Si el producto ya existe en el carrito, modifica su cantidad
    carrito[index].cantidad += objeto.cantidad;
  }

  console.log(carrito);

}

//   console.log(carrito);
//   if (carrito.length == 0) {
//     carrito.push(objeto);
//     console.log(carrito);
//   } else if (objeto == null) {
//     Inicio();
//   } else {
//     let index = carrito.nombre.indexOf(objeto.nombre);
//     if (index != -1) {
//       carrito.push(objeto);
//     } else {
//       carrito[index].inventario += 1;
//     }
//   }
// }

// const index = carrito.findIndex(item => item.nombre === producto.nombre);

// if (index === -1) {
//   // Si el producto no existe en el carrito, lo agrega con la cantidad especificada
//   carrito.push({ ...producto, cantidad });
// } else {
//   // Si el producto ya existe en el carrito, modifica su cantidad
//   carrito[index].cantidad += cantidad;
// }

// console.log(carrito);
// }

function eliminarProductos() {}

function vaciarCarrito() {}

function MSJ(cate) {
  let msj2 = "";
  let id = 1;
  for (let index = 0; index < cate.length; index++) {
    msj2 = msj2 + `${id} - ${cate[index]} \n`;
    id++;
  }
  return msj2;
}
