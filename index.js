// * Array (lista de datos)
var tareas = []

var botonBorrarTodo = document.getElementById("btn-borrar")
botonBorrarTodo.onclick = borrarTodasLasTareas

// * Funciones y lógica de la app

function agregarUnaTarea (texto) {
  tareas.push(texto)
  agregarTareaAlDOM(texto)
}

function borrarTodasLasTareas () {
  tareas = []
  vaciarTareasDelDOM()
}

function agregarTareaAlDOM (texto) {
  // * 1 Buscar el contenedor de tareas:
  var contenedor = document.getElementById("contenedorTareas")
  // * 2 Crear el párrafo
  var parrafoNuevo = document.createElement("p")
  // * 3 Ponerle class="tarea" al parrafo
  parrafoNuevo.className = "tarea"
  // * 4 Poner la tarea dentro del parrafo
  parrafoNuevo.textContent = texto
  // * 5 Meter el parrafo dentro del contenedor
  contenedor.appendChild(parrafoNuevo)
}

function vaciarTareasDelDOM () {
  // * 1 Buscar el contenedor de tareas:
  var contenedor = document.getElementById("contenedorTareas")
  contenedor.innerHTML = "" 
}
