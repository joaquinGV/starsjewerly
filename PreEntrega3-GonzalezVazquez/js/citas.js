// import { usuarios } from "./usuarios.js";

// Definicion de todas las variables utilizadas, usuarios, horas, servicios y citas agendadas
// lista de usuarios que han creado su perfil

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
    cliente: "Joaquin Gonzalez",
    correo: "joaquincoder@gmail.com",
  },
  {
    fecha: new Date(2023, 4, 22, 12),
    categoria: "Pies",
    servicio: "Manicure Express",
    cliente: "Cynthia Ramirez",
    correo: "cynthiacoder@gmail.com",
  },
  {
    fecha: new Date(2023, 4, 22, 16),
    categoria: "Oferta",
    servicio: "Promo Amigas",
    cliente: "Joaquin Gonzalez",
    correo: "joaquincoder@gmail.com",
  },
  {
    fecha: new Date(2023, 4, 23, 10),
    categoria: "Manos",
    servicio: "Manicure Express",
    cliente: "Cynthia Ramirez",
    correo: "cynthiacoder@gmail.com",
  },
];

// localStorage.setItem("usuario", "joa@hotmail.com");
// localStorage.setItem("password", "");

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
  actualizarServicio();
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
        <p><b>Servicio:</b> ${servicioResumen ? servicioResumen : ""}</p>
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
// Dentro de una funcion por que los servicios se actualizan dependiendo la categoria
function actualizarServicio() {
  const dropdown = document.getElementById("servicio");

  dropdown.addEventListener("change", () => {
    const valorSeleccionado = dropdown.value;
    console.log("Servicio seleccionado: " + valorSeleccionado);
    servicioResumen = valorSeleccionado;
  });
}

// --------- Obtener valor de fecha y actualizarlo, seccion "fecha" ------
//Obtener valor de fecha actualizado cada que cambie
const fecha = document.querySelector(".cat2-fecha input");

//Cada que la fecha cambie de valor ejecutar funcion que muestra botones de respectiva fecha
let fechaAct = new Date();
fecha.onchange = () => {
  fechaAct = actualizarFecha();
  mostrarHorarios();
};

//Actualizar fecha a horario local
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

// Funciones que se ejecutan al cargar la aplicacion
MostrarServicios();

let usersList;
let Usuario, UsuarioCorreo;

///lectura de datos de un archivo local
///uso una ruta relativa
const pedirUsers = async () => {
  const resp = await fetch("../js/users.json");
  const data = await resp.json();
  usersList = data;
  return data;
};

function AgregarEventListenerYaTengoCuenta() {
  const botonInicio = document.getElementById("iniciarSesion");
  botonInicio.addEventListener("click", (event) => {
    pedirUsers();
    Swal.fire({
      title: "Login",
      text: "Ingrese su mail de login",
      input: "email",
      inputPlaceholder: "correo@gmail.com",
      confirmButtonText: "Enviar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        // Lee lista de usuarios y compara si existe correo con la lista de usuarios, si no levanta un error
        // Si el usuario existe guardamos los datos de dicho usuario para compararlos en contraseña
        Usuario = null;
        return fetch("../js/users.json")
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            for (let i = 0; i < usersList.length; i++) {
              const element = usersList[i];
              if (login == element.correo) {
                Usuario = element;
                return response.json;
              }
            }
            if (!Usuario) {
              throw new Error("Correo no encontrado");
            }
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((resultado) => {
      ///una vez que el usuario ingreso el valro en el prompt y apreto algun boton
      console.log(resultado);
      if (resultado.isConfirmed) {
        // console.log(Usuario);
        Swal.fire({
          title: "Password",
          text: "Ingrese su password",
          input: "password",
          confirmButtonText: "Enviar",
          showCancelButton: true,
          cancelButtonText: "Me arrepenti",
        }).then((resultado) => {
          if (resultado.isConfirmed) {
            let pass = resultado.value;
            console.log(pass);
            if (pass === Usuario.contraseña) {
              // Si existe, creamos user con datos del Usuario en localStorage
              Swal.fire({
                title: "Ingreso de usuario Exitoso!",
                icon: "success",
              });
              localStorage.setItem("user", JSON.stringify(Usuario));
              clienteActivo();
            } else {
              Swal.fire({
                title: "Contraseña Incorrecta",
                icon: "error",
                timer: 1000,
              });
            }
          }
        });
      }
    });
    event.preventDefault();
  });
}

// ---- Cuando hay datos del cliente cambiar la interfaz con sus datos -- //
function clienteActivo() {
  const formularioCliente = document.getElementById("f22");
  const usuario = JSON.parse(localStorage.getItem("user"));
  formularioCliente.innerHTML =
    // formularioCliente.innerHTML +
    `
    <div class="f2-parte1 row">
      <h3 class="col-10 col-md-6">Bienvenido </h3>
      <button id="cerrarSesion" class="col-10 col-md-5" type="button">Cerrar Sesion</button>
    </div> 
    <div class="f2-parte2">
      <label for="nombre">Nombre y Apellido:</label>
      <input type="text" name="nombre" id="nombre" value="${usuario.nombre}" readonly />
    </div>
    <div class="f2-parte2">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" value="${usuario.correo}" readonly />
    </div>
    <div class="f2-parte2">
      <label for="telefono">Telefono:</label>
      <input type="number" name="telefono" id="telefono" value="${usuario.telefono}" readonly />
    </div>
            `;
  localuser = usuario;
  AgregarEventListenerCerrarSesion();
}

// -- Cuando variable user no tiene datos mostrar formulario -- //
function clienteNuevo() {
  localuser = null;
  const formularioCliente = document.getElementById("f22");
  // const usuario = JSON.parse(localStorage.getItem("user"));
  formularioCliente.innerHTML = `
            <div class="f2-parte1 row">
              <h3 class="col-10 col-md-6">Cliente Nuevo</h3>
              <button id="iniciarSesion" class="col-10 col-md-5" type="button">
                Ya tengo cuenta
              </button>
            </div>
            <div class="f2-parte2">
              <label for="nombre">Nombre y Apellido:</label>
              <input type="text" name="nombre" id="nombre" />
            </div>
            <div class="f2-parte2">
              <label for="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div class="f2-parte2">
              <label for="telefono">Telefono:</label>
              <input type="number" name="telefono" id="telefono" />
            </div>
            <div class="f2-parte2">
              <label for="contraseña">Contraseña:</label>
              <input type="password" name="contraseña" id="contraseña" />
            </div>
            <div class="f2-parte3">
              <input type="checkbox" name="checkbox" id="checkbox" required />
              <p>Acepto terminos y condiciones</p>
            </div>
            <div class="f2-parte3">
              <button type="submit">Registrarse</button>
            </div>
            `;

  AgregarEventListenerYaTengoCuenta();
  AgregarEventListenerRegistrarse();
}

let localuser = JSON.parse(localStorage.getItem("user"));
localuser ? clienteActivo() : clienteNuevo();

function AgregarEventListenerCerrarSesion() {
  const botonCerrar = document.getElementById("cerrarSesion");

  botonCerrar.addEventListener("click", () => {
    // localStorage.removeItem("user"); // Error, no termina de cargar swal fire y la pagina reinicia
    Swal.fire({
      title: "Desea cerrar sesion?",
      showCancelButton: true,
      confirmButtonText: "Cerrar Sesion",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Sesion cerrada!");
        // localStorage.clear();
        localStorage.removeItem("user");
        clienteNuevo();
      }
    });
  });
}

//  -- Boton para revisar citas -- //
// Verifica si el usuario esta logeado y le muestra sus citas futuras en caso de tener.

const botonRevisarCitas = document.querySelector("#boton-citas");

botonRevisarCitas.addEventListener("click", () => {
  if (!localuser) {
    Swal.fire({
      icon: "error",
      title: "No has iniciado Sesion",
      text: "Inicia sesion para ver tus citas",
      footer: 'Has click en "Ya tengo cuenta" para iniciar sesion',
    });
  } else {
    mostrarCitas();
    Swal.fire({
      title: `Citas de ${localuser.nombre}`,
      html: mostrarCitas(),
    });
  }
});

const mostrarCitas = () => {
  const citasCliente = citas.filter(
    (objeto) => objeto.correo === localuser?.correo
  );
  console.log(citasCliente);
  return citasCliente.length
    ? generateTable(citasCliente)
    : `<h4>No has agendado ninguna cita.</h4>`;
};

// Build table HTML
const generateTable = (cita) => {
  console.log(cita);
  const tableHtml = `
  <table class="table table-striped align-middle">
    <thead>
      <tr>
        <th scope="col">Fecha</th>
        <th scope="col">Hora</th>
        <th scope="col">Servicio</th>
        <th scope="col-3">Categoria</th>
      </tr>
    </thead>
    <tbody>
      ${cita
        .map(
          (obj) => `
            <tr class="table-light">
              <td>${obj.fecha.toLocaleDateString("es-ES", options)}</td>
              <td>${formatAMPM(obj.fecha)}</td>
              <td>${obj.servicio}</td>
              <td>${obj.categoria}</td>
            </tr>
          `
        )
        .join("")}
    </tbody>
  </table>
`;
  console.log(tableHtml);
  return tableHtml;
};

// -- Utilizar boton Registrarse e iniciar sesion con datos ingresados -- //
// Obtener datos de la forma 2 "Cliente Nuevo"

function AgregarEventListenerRegistrarse() {
  const formularioRegistro = document.getElementById("f22");
  formularioRegistro.addEventListener("submit", validarFormulario);

  function validarFormulario(e) {
    e.preventDefault();
    const nombre = formularioRegistro.nombre.value;
    const correo = formularioRegistro.email.value;
    const telefono = formularioRegistro.telefono.value;
    const contraseña = formularioRegistro.contraseña.value;

    pedirUsers().then((usersList) => {
      for (let i = 0; i < usersList.length; i++) {
        const element = usersList[i];
        if (correo === element.correo) {
          console.log("El correo existe");
        }
      }
    });

    console.log("Nombre:", nombre);
    console.log("Correo:", correo);

    console.log("Formulario Enviado");
  }
}
