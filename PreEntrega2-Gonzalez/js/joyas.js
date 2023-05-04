// Definir el objeto producto y la mayoria de sus atributos
import { Objetos } from "./objetos.js";

class Joyas extends Objetos {
  constructor(
    nombre,
    precio,
    inventario,
    clasificacion,
    estilo,
    diseño,
    genero,
    patron,
    material,
    ocasion,
    peso
  ) {
    super(nombre, precio, inventario, clasificacion);
    this.estilo = estilo;
    this.diseño = diseño;
    this.genero = genero;
    this.patron = patron;
    this.material = material;
    this.ocasion = ocasion;
    this.peso = parseInt(peso);
  }
}

let listajoyas = [
  // Pulseras
  new Joyas(
    "Pulsera de plata con dije de corazón",
    45.99,
    10,
    "Pulseras",
    "clásico",
    "eslabones",
    "Mujer",
    "en forma de corazón",
    "plata esterlina",
    "regalo de aniversario",
    15
  ),
  new Joyas(
    "Pulsera de perlas naturales",
    89.99,
    5,
    "Pulseras",
    "vintage",
    "cuentas",
    "Mujer",
    "uniforme",
    "perlas de agua dulce y plata esterlina",
    "boda",
    20
  ),
  new Joyas(
    "Pulsera de cuero con abalorios de colores",
    24.99,
    20,
    "Pulseras",
    "bohemio",
    "múltiples hilos",
    "unisex",
    "irregular",
    "cuero y aleación de zinc",
    "festival",
    25
  ),
  new Joyas(
    "Pulsera de plata con diseño de árbol de la vida",
    39.99,
    15,
    "Pulseras",
    "minimalista",
    "cadena ajustable",
    "unisex",
    "simétrico",
    "plata esterlina",
    "regalo de graduación",
    10
  ),
  new Joyas(
    "Pulsera de piedras semipreciosas con cuentas doradas",
    54.99,
    8,
    "Pulseras",
    "elegante",
    "cuentas con colores variados",
    "Mujer",
    "simétrico",
    "piedras semipreciosas y aleación de zinc",
    "fiesta",
    30
  ),

  // Anillos
  new Joyas(
    "Anillo de compromiso con diamante solitario",
    599.99,
    2,
    "Anillos",
    "clásico",
    "aro con diamante engastado",
    "Mujer",
    "simétrico",
    "oro blanco y diamante de calidad G-H",
    "compromiso",
    4
  ),
  new Joyas(
    "Anillo de compromiso",
    5000,
    10,
    "Anillos",
    "Clásico",
    "Solitario",
    "Mujer",
    "Redondo",
    "Oro blanco",
    "Compromiso",
    10
  ),

  // Collar
  new Joyas(
    "Collar de plata con Corazon de Circon Incrustado",
    88,
    15,
    "Collar",
    "TRENDY, Clasic",
    "Enchapado",
    "Mujer",
    "Corazon",
    "925, Sterling Silver",
    "Fiesta",
    12
  ),

  // Conjunto
  new Joyas(
    "Conjunto de joyas de plata de ley 925 para mujer forma de corazon",
    52,
    10,
    "Conjunto",
    "TRENDY",
    "Enchapado",
    "Mujer",
    "Corazon",
    "925, Sterling",
    "Fiesta",
    8
  ),
];
export { Joyas, listajoyas };
