Entrega de JavaScript:

Funciones dentro de la pagina "Agendar Cita".

Seleccion de Servicios:

- Dependiendo la categoria seleccionada muestra una lista u otra en "servicios".
- Al seleccionar un fecha solo mostrar los botones con los horarios disponibles, si hay una cita existente borrara dicho boton Ej."22/05/2023"
- Al hacer click en un boton de "Horario" actualiza la tabla "Resumen Cita" con formato de fecha.
- Al hacer click en "Revisar Citas" solicita inicio de Sesion.
- Al iniciar sesion, muestra las citas del cliente y si no tiene muestra msj.
  - Ej con citas. "joaquincoder@gmail.com" / "coderhouse"
  - Ej sin citas. "admin@email.com" / "admin"

Cliente Nuevo:

- Al hacer click en "Ya tengo cuenta" pide login, si no existe el correo arroja error.
  - Si el correo existe, solicita la contraseña y si coincide inicia sesion
    - Guarda el usuario en localhost y si dicho dato existe la pagina cambia, y rellena los datos de la interfaz.
  - Al cerrar sesion, se borran datos del local host y actualiza la pagina tras la confirmacion.
- Se puede crear usuario si el correo y telefono no coinciden con algun usuario existente, y se guarda temporalmente en local host (aun no se pueden al archivo user.json)

Los usuarios se encuentran en /users.json y de ahi se obtienen.
Las citas es un array de objetos

En trabajo:

- Guardar datos del formulario "Cliente Nuevo" en users.json
- Capturar todos los datos de los formularios y validarlos al hacer click en "Agendar Cita".
- Crear cita nueva y que se vea reflejada al intentar agendar mismo dia/horario
- Crear pagina basica con una tabla que muestre dependiendo el dia todas las citas de ese dia.
