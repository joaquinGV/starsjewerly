// Codigo Ejemplo con modo carrito

import { listajoyas } from "./joyas.js";
import { mostrarProducto } from "./mostrarProductos.js";

let carrito = [];

function Inicio() {
  let eleccion = parseInt(
    prompt(
      "Que accion desea realizar a su carrito? \n 1.- Agregar Productos. \n 2.- Eliminar Productos. \n 3.- Vaciar Carrito. \n 4.- Mostrar Carrito \n 6.- Salir "
    )
  );

  switch (eleccion) {
    case 1:
      agregarProducto();
      console.log("Este es el carrito" + carrito);
      Inicio();

      break;
    case 2:
      eliminarProductos();
      Inicio();

      break;
    case 3:
      vaciarCarrito();
      Inicio();
      break;

    case 4:
      alert(mostrarCarrito());
      Inicio();
    case 6:
      break;

    case IsNaN(eleccion) || null:
      break;

    default:
      alert("Elija una opcion correcta");
      Inicio();
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

  alert(mostrarCarrito());
}

function eliminarProductos() {
  let car = mostrarCarrito();
  let val = prompt(`Que item desea eliminar? \n\n ${car}`);
  val -= 1;
  let cant = prompt(`Cantidad de Items que quitara del carrito`);
  carrito[val].cantidad -= cant;
  console.log(carrito[val].cantidad);
  if (carrito[val].cantidad <= 0) {
    carrito.splice(val, 1);
  }
}

function vaciarCarrito() {
  carrito = [];
  alert("Carrito Vaciado :c");
}

function mostrarCarrito() {
  let msj = "";
  for (let i = 0; i < carrito.length; i++) {
    msj =
      msj +
      `${i + 1} -- Nombre: ${carrito[i].nombre} | Cantidad = ${
        carrito[i].cantidad
      } | Precio total: ${carrito[i].cantidad * carrito[i].precio} \n`;
  }
  return msj;
}

function MSJ(cate) {
  let msj2 = "";
  let id = 1;
  for (let index = 0; index < cate.length; index++) {
    msj2 = msj2 + `${id} - ${cate[index]} \n`;
    id++;
  }
  return msj2;
}

alert("* Bienvenido a Jewerly Store *");
Inicio();
