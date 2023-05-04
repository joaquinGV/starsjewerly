import { Joyas, listajoyas } from "./joyas.js";

// export function mostrarProducto() {
//   return console.log(listajoyas);
// }

// Codigo Ejemplo con modo mostrar productos

function MSJ2(lista) {
  let msj = "";
  let val = Number;
  let id = 1;
  for (let index = 0; index < lista.length; index++) {
    msj =
      msj +
      `${id} - ${lista[index].nombre} | Precio: ${lista[index].precio} | Disponibles: ${lista[index].inventario} \n`;
    id++;
  }
  do {
    val = prompt(`Elije un articulo: \n\n ${msj}`);
    val = val - 1;
  } while (!(val < lista.length && val >= 0));
  return val;
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

function objetoAñadido(obj, cant) {
  objeto = { obj, cantidad: cant };
  return objeto;
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

function filtrarCategoria(cat) {
  let joyas = listajoyas; // lista importada
  let categorias = [];
  for (let i = 0; i < joyas.length; i++) {
    if (joyas[i].clasificacion == cat) {
      categorias.push(joyas[i]);
    }
  }
  return categorias;
}

// Funcion que regresa el objeto seleccionado de la lista
export function mostrarProducto() {
  const tienda = listajoyas;

  let categorias = Categorias();
  let msj2 = MSJ(categorias);
  let msj = `Seleccione la categoria deseada: \n${msj2}`;

  let result = "";
  let eleccion = prompt(msj);
  switch (true) {
    case eleccion >= 1 && eleccion <= 4:
      let lista = filtrarCategoria(categorias[eleccion - 1]);
      let val = MSJ2(lista);
      let cantidad = prompt("Cantidad de unidades?");
      let obj = lista[val];
      obj["cantidad"] = parseInt(cantidad);

      return obj;

    case NaN || null:
      alert("No se elijio ningun producto");
      break;

    default:
      console.log("No se elijio ningun producto");
      mostrarProducto();
      break;
  }
}
