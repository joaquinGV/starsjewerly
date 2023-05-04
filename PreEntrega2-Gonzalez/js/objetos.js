// Definir objeto padre y los principales atributos
class Objetos {
  constructor(nombre, precio, inventario, clasificacion) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.inventario = parseInt(inventario);
    this.clasificacion = clasificacion;
  }
}

export {Objetos}
