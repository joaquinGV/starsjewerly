/// Juego de Piedra Papel o Tijera

//Definicion de variables globales (no necesariamente globales)
let jugador1, jugador2, compu, tipoJuego, eleccion, puntuacion, elec;

do {
  do {
    elec = prompt(
      "Bienvenido a Pieda Papel o Tijera - Elige una opcion \n 1- Juega con un amigo. \n 2- Juega con la compu. \n 3- Salir del juego"
    );
    eleccion = parseInt(elec);
    console.log(elec, eleccion);

    if (elec === null) {
      // Intruccion en case de ESC o cancelar
      break;
    }
  } while (elec != 1 && elec != 2 && elec != 3);
  switch (eleccion) {
    case 1: // Redirije al juego 1
      juego1();
      continue;
    case 2:
      juego2(); // Redirije al juego 2
      continue;
    case 3:
      eleccion = 3;
      alert("Gracias por jugar, Recarga para inicar otra vez :)");
      break;
    case IsNaN(eleccion): //Cuando la eleccion es ESC o Cancelar no volver a iterar
      break;
    default: // Opcion diferente solo alertar
      alert("Eleccion diferente , Intente con otra porfavor");
      continue;
  }
} while (eleccion != 3);

// Juego 1 modo de 2 jugadores
function juego1() {
  let repetir;
  let conteoj1 = 0,
    conteoj2 = 0,
    empates = 0;
  let jugador1 = prompt("Nombre jugador 1:", "Player1");
  let jugador2 = prompt("Nombre jugador 2: ", "Player2");
  let mensaje = "¿Que desea realizar? \n 1 - Repetir juego \n 2 - Salir";
  let empate = "El juego fue un empate ";
  do {
    let eleccion1 = jugarPPT(jugador1);
    let eleccion2 = jugarPPT(jugador2);
    let ganador = definirGanador(eleccion1, eleccion2);
    if (ganador == 1) {
      alert(`Gano el jugador ${jugador1}`);
      conteoj1++;
    } else if (ganador == 2) {
      alert(`Gano el jugador ${jugador2}`);
      conteoj2++;
    } else {
      alert(empate);
      empates++;
    }
    repetir = parseInt(
      prompt(
        `El marcador va: \n ${jugador1} : ${conteoj1} victorias --- ${jugador2} : ${conteoj2} victorias \n Empates : ${empates} \n\n ${mensaje}`,
        1
      )
    );
  } while (repetir == 1);
}

// Eleccion de Piedra papel o tijera en formato numero
function jugarPPT(nombre) {
  let eleccionJugador, val;
  do {
    eleccionJugador = prompt(
      nombre +
        " elija entre las opciones: \n 1- Piedra \n 2- Papel \n 3- Tijera"
    );
    if (eleccionJugador === null) {
      return;
    }
    eleccionJugador = parseInt(eleccionJugador);
    console.log(eleccionJugador);
  } while (
    eleccionJugador != 1 &&
    eleccionJugador != 2 &&
    eleccionJugador != 3
  );
  val = seleccion(eleccionJugador);
  return val;
}

//Define y regresa la selccion en forma de texto
function seleccion(eleccionJugador) {
  switch (eleccionJugador) {
    case 1:
      val = "Piedra";
      return val;
    case 2:
      val = "Papel";
      return val;
    case 3:
      val = "Tijera";
      return val;
    default:
      alert("Hubo un error");
  }
}

// Definir al ganador 1 es gana jugador 1, 2 gana jugador 2, 3 empate
function definirGanador(e1, e2) {
  if (e1 == "Piedra") {
    if (e2 == "Piedra") {
      return 3;
    } else if (e2 == "Papel") {
      return 2;
    } else if (e2 == "Tijera") {
      return 1;
    }
  } else if (e1 == "Papel") {
    if (e2 == "Piedra") {
      return 1;
    } else if (e2 == "Papel") {
      return 3;
    } else if (e2 == "Tijera") {
      return 2;
    }
  } else if (e1 == "Tijera") {
    if (e2 == "Piedra") {
      return 2;
    } else if (e2 == "Papel") {
      return 1;
    } else if (e2 == "Tijera") {
      return 3;
    }
  } else {
    return 3;
  }
}

// Juego 2 persona vs la computadora
function juego2() {
  let repetir;
  let conteoj1 = 0,
    conteocpu = 0,
    empates = 0,
    cpu = "Computadora";
  let jugador1 = prompt("Nombre jugador 1:", "Player1");
  let mensaje = "¿Que desea realizar? \n 1 - Repetir juego \n 2 - Salir";
  let empate = "El juego fue un empate ";
  do {
    let eleccion1 = jugarPPT(jugador1);
    let eleccpu = seleccion(generarNumeroAleatorio());
    console.log(eleccpu);
    let ganador = definirGanador(eleccion1, eleccpu);
    if (ganador == 1) {
      alert(`Gano el jugador ${jugador1}`);
      conteoj1++;
    } else if (ganador == 2) {
      alert(`Gano la ${cpu}`);
      conteocpu++;
    } else {
      alert(empate);
      empates++;
    }
    repetir = parseInt(
      prompt(
        `El marcador va: \n ${jugador1} : ${conteoj1} victorias --- ${cpu} : ${conteocpu} victorias \n Empates : ${empates} \n\n ${mensaje}`,
        1
      )
    );
  } while (repetir == 1 || !isNaN(repetir));
}

//Generador de numero aleatorio entre 0.5 y 3.499
function generarNumeroAleatorio() {
  const numeroAleatorio = Math.random() * 2.9999 + 0.5; // genera un número aleatorio entre 0.5 y 3.4999
  console.log(numeroAleatorio);
  const numeroRedondeado = Math.round(numeroAleatorio, 1); // redondea el número a 2 decimales
  console.log(numeroRedondeado);
  return parseInt(numeroRedondeado);
}
