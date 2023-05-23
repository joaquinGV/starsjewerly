// Definir el objeto producto y la mayoria de sus atributos

class Usuarios {
  constructor(nombre, email, telefono, contraseña) {
    this.nombre = nombre;
    this.email = email;
    this.telefono = parseInt(telefono);
    this.contraseña = contraseña;
  }
}

let usuarios = [
  // Pulseras
  new Usuarios(
    "Joaquin Gonzalez",
    "joaquincoder@gmail.com",
    9612300000,
    "coderhouse"
  ),
  new Usuarios(
    "Cynthia Ramirez",
    "cynthiacoder@gmail.com",
    123456789,
    "cynthia"
  ),
];

export { usuarios };
