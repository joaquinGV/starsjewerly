// Codigo Ejemplo con modo carrito

import { Joyas, listajoyas } from "./joyas.js";

function MSJ2(lista) {
  let msj = "";
  let id = 1;
  for (let index = 0; index < lista.length; index++) {
    msj =
      msj +
      `${id} - ${lista[index].nombre} | Precio: ${lista[index].precio} | Cantidad disponible: ${lista[index].inventario} \n`;
    id++;
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

function Categorias() {
  const tienda = listajoyas;
  console.log(tienda);
  let cat = [String(tienda[0].clasificacion)];
  for (let i = 0; i < tienda.length; i++) {
    if (!cat.includes(tienda[i].clasificacion)) {
      cat.push(tienda[i].clasificacion);
    }
  }
  return cat;
}

function filtrarCategoria(categoria) {
  let joyas = listajoyas; // lista importada
  let pulseras = [];
  for (let i = 0; i < joyas.length; i++) {
    if (joyas[i].clasificacion == categoria) {
      pulseras.push(joyas[i]);
    }
  }
  return pulseras;
}

export function Carrito() {
  const tienda = listajoyas;

  let categorias = Categorias();
  let msj2 = MSJ(categorias);
  let msj = `Seleccione la categoria deseada: \n${msj2}`;

  let result = "";
  let eleccion = prompt(msj);
  switch (true) {
    case eleccion >= 1 && eleccion <= 4:
      let lista = filtrarCategoria(categorias[eleccion - 1]);
      alert(MSJ2(lista));

      break;

    default:
      console.log("Error, dato incorrecto");
      break;
  }
}
