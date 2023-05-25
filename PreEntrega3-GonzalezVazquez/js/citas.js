// import { usuarios } from "./usuarios.js";

// Definicion de todas las variables utilizadas, usuarios, horas, servicios y citas agendadas
// lista de usuarios que han creado su perfil
users = [
  {
    nombre: "Joaquin Gonzalez",
    correo: "joaquincoder@gmail.com",
    telefono: 9612300000,
    contraseña: "coderhouse",
  },
  {
    nombre: "Cynthia Ramirez",
    correo: "cynthiacoder@gmail.com",
    telefono: 123456789,
    contraseña: "cynthia",
  },
];

//variable de horas para mostrar como opciones html
const horas = [
  { hora: "8:00 am", val: 8 },
  { hora: "9:00 am", val: 9 },
  { hora: "10:00 am", val: 10 },
  { hora: "11:00 am", val: 11 },
  { hora: "12:00 pm", val: 12 },
  { hora: "1:00 am", val: 13 },
  { hora: "2:00 am", val: 14 },
  { hora: "3:00 am", val: 15 },
  { hora: "4:00 am", val: 16 },
];

// Servicios mostrados en html dependiendo de la categoria
const serviciosManos = [
  "Corte de uñas",
  "Esmaltado de Uñas",
  "Manicure Express",
  "Manicure Ruso",
  "Manicure en Seco",
  "Manicure Spa",
  "Gel Color",
  "Uñas Acrilico",
  "Dipping con Tip",
  "Uñas Esculturales",
  "Retoque de Uñas",
  "Efectos",
];
const serviciosOferta = ["Promo Amigas", "Promo del Mes", "Promo temporada"];

// lista de citas con horario y usuarios
let citas = [
  {
    fecha: new Date(2023, 4, 22, 8),
    categoria: "Manos",
    servicio: "Manicure Express",
    cliente: users[0],
  },
  {
    fecha: new Date(2023, 4, 22, 12),
    categoria: "Pies",
    servicio: "Manicure Express",
    cliente: users[1],
  },
  {
    fecha: new Date(2023, 4, 22, 16),
    categoria: "Oferta",
    servicio: "Promo Amigas",
    cliente: users[0],
  },
  {
    fecha: new Date(2023, 4, 23, 10),
    categoria: "Manos",
    servicio: "Manicure Express",
    cliente: users[1],
  },
];

// Actualizar servicios mostrados en html
function MostrarServicios(categoria = "Manos") {
  const servicios = document.getElementById("servicio");
  console.log(categoria === "Manos" || "Pies");
  servicios.innerHTML = `<option value="" disabled selected hidden> Seleccionar Servicio </option>`; ///Defino Titulo de la seccion
  if (categoria !== "Oferta") {
    for (let i = 0; i < serviciosManos.length; i++) {
      servicios.innerHTML =
        servicios.innerHTML +
        `
      <option value="${serviciosManos[i]}">${serviciosManos[i]}</option>
      `;
    }
  } else {
    for (let i = 0; i < serviciosOferta.length; i++) {
      servicios.innerHTML =
        servicios.innerHTML +
        `
      <option value="${serviciosOferta[i]}">${serviciosOferta[i]}</option>
      `;
    }
  }
}

// Funcion para mostrar horarios disponibles dependiendo la fecha seleccionada en html
function mostrarHorarios() {
  const horarios = document.getElementById("horarios-disponibles"); // Buscar el elemento a trabajar "horarios-disponibles"
  horarios.innerHTML = `<h3 for="horario">Selecciona un horario:</h3>`; ///Defino Titulo de la seccion
  const horasDis = horasDisponibles(fechaAct);
  console.log(fechaAct);
  console.log(citas[0].fecha);

  for (let i = 0; i < horasDis.length; i++) {
    ///por cada uno de los horarios disponilbes, genero un boton desplegandolo
    horarios.innerHTML =
      horarios.innerHTML +
      `
                        <div class="r-button">
                            <input
                                type="radio"
                                name="Horarios"
                                value="${horasDis[i].val}"
                                ${i == 0 ? "checked" : ""}
                            />
                            <label for="${horasDis[i].hora}">${
        horasDis[i].hora
      }</label>
                        </div>
                       `;
  }
}
MostrarServicios();

//---- Actualizar valores de la seccion "Resumen Cita" --- //
let categoriaResumen = "Manos",
  servicioResumen,
  diaResumen,
  horaResumen,
  options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
function actualizarResumen() {
  const resumen = document.querySelector(".r-block .r-content");
  resumen.innerHTML = ``;
  diaResumen = fechaAct.toLocaleDateString("es-ES", options);
  horaResumen = formatAMPM(fechaAct);
  console.log(resumen.innerHTML);
  resumen.innerHTML = `
        <p><b>Categoria:</b> ${categoriaResumen}</p>
        <p><b>Servicio:</b> ${
          servicioResumen != true ? "" : servicioResumen
        }</p>
        <p><b>Dia:</b> ${diaResumen}</p>
        <p><b>Hora:</b> ${horaResumen}</p>
      `;
}

// --------- Obtener valores de radio button seccion "Categoria" ----------//
// Obtener todos los elementos de tipo radio con name="opcion"
const radioButtons = document.querySelectorAll(
  '.cat1__categoria input[name="categoria"]'
);

// Obtener valores de "Categoria" y asignar valor a variable
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    const valorSeleccionado = document.querySelector(
      '.cat1__categoria input[name="categoria"]:checked'
    ).value;
    console.log("Categoria seleccionada: " + valorSeleccionado);
    categoriaResumen = valorSeleccionado;
    MostrarServicios(categoriaResumen);
  });
});

// --------- Obtener valores de dropdown seccion "Servicio" ----------//
// Definir dropdown, su ubicacion y el change event
const dropdown = document.getElementById("servicio");

dropdown.addEventListener("change", () => {
  const valorSeleccionado = dropdown.value;
  console.log("Servicio seleccionado: " + valorSeleccionado);
  servicioResumen = valorSeleccionado;
});

// --------- Obtener valor de fecha y actualizarlo, seccion "fecha" ------
//Obtener valor de fecha actualizado cada que cambie
const fecha = document.querySelector(".cat2-fecha input");

//Cada que la fecha cambie de valor ejecutar funcion que muestra botones de respectiva fecha
let fechaAct = new Date();
fecha.onchange = () => {
  fechaAct = actualizarFecha();
  mostrarHorarios();
};

//Actualizar fecha
function actualizarFecha() {
  let fecha2 = new Date(fecha.value);
  fecha2.setMinutes(fecha2.getMinutes() + fecha2.getTimezoneOffset());
  return fecha2;
}

// Cambiar horario de fechas a formato am y pm (aun por usarse)
function formatAMPM(date) {
  var hours = date.getHours();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  var strTime = hours + ":00" + " " + ampm;
  return strTime;
}

// --------- Obtener valores de button seccion "Horario" ----------//
// Obtener todos los elementos de tipo radio con name="opcion"
const horaButtons = document.querySelectorAll("#horarios-disponibles");

// Asignar el evento "change" a cada radio button y asignar valor a variable
horaButtons.forEach((hButton) => {
  hButton.addEventListener("change", () => {
    const valorSeleccionado = document.querySelector(
      '.r-button input[name="Horarios"]:checked'
    ).value;
    console.log("Horario seleccionado: " + valorSeleccionado);
    fechaAct.setHours(valorSeleccionado);
    console.log(fechaAct);
    console.log(formatAMPM(fechaAct));
    actualizarResumen();
  });
});

// ----------  Borrar horarios apartados en citas --------- //
function horasDisponibles(date) {
  let horas2 = [...horas];
  const resultado = citas.filter(
    //Buscamos fechas de citas coincidentes a fecha seleccionada
    (day) => day.fecha.toDateString() == date.toDateString()
  );
  if (resultado) {
    // Si el resultado es positivo, removemos los horarios que tengan fechas existentes
    for (let i = 0; i < resultado.length; i++) {
      let index = horas2.findIndex(
        (el) => el.val == resultado[i].fecha.getHours()
      );
      if (index != 1) {
        horas2.splice(index, 1);
      }
    }
    // console.log(horas2);
    return horas2;
  }
}
