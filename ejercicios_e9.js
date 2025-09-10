//Ejemplo de implementación de FIFO:

// Crear una cola
let cola = [];

// Agregar elementos (enqueue)
cola.push("Tarea 1"); // ["Tarea 1"]
cola.push("Tarea 2"); // ["Tarea 1", "Tarea 2"]
cola.push("Tarea 3"); // ["Tarea 1", "Tarea 2", "Tarea 3"]

console.log(cola); // ["Tarea 1", "Tarea 2", "Tarea 3"]

// Eliminar elementos (dequeue)
console.log(cola.shift(), "ha sido eliminada"); // "Tarea 1" (sale el primero)
console.log(cola); // ["Tarea 2", "Tarea 3"]
console.log(cola.shift(), "ha sido eliminada"); // "Tarea 2"
console.log(cola); // ["Tarea 3"]
console.log(cola.shift(), "ha sido eliminada"); // "Tarea 3"
console.log(cola); // []
console.log(cola.shift(), "ha sido eliminada"); // undefined (cola vacía)
console.log(cola); // []
/*
- Los elementos se agregan al final con push().
- Los elementos se eliminan del inicio con shift().
- Esto asegura que el primer elemento en entrar sea el primero en salir.
*/

//---------------------------//-----------------------------//

// Ejemplo de implementación de LIFO:

// Crear una pila
let pila = [];

// Agregar elementos (push)
pila.push("Plato 1"); // ["Plato 1"]
pila.push("Plato 2"); // ["Plato 1", "Plato 2"]
pila.push("Plato 3"); // ["Plato 1", "Plato 2", "Plato 3"]

console.log(pila); // ["Plato 1", "Plato 2", "Plato 3"]

// Eliminar elementos (pop)
console.log(pila.pop(), "ha sido usado."); // "Plato 3" (sale el último)
console.log(pila); // ["Plato 1", "Plato 2"]
console.log(pila.pop(), "ha sido usado."); // "Plato 2"
console.log(pila); // ["Plato 1"]

/* 
- Los elementos se agregan al final con push().
- Los elementos se eliminan del final con pop().
- Esto asegura que el último elemento en entrar sea el primero en salir. 
 */

//---------------------------//-----------------------------//

// Ejemplo práctico: Gestión de tareas con FIFO

// Arreglo de cola
let colaTareas = []; // Cola para tareas (FIFO)

const agregarAlFinal = (tarea) => {
    if (colaTareas.push(tarea)) {
        console.log(`Tarea agregada: ${tarea}. Cola actual: ${colaTareas}`);
    }
};

// accion para remover del inicio
const eliminarPrimero = () => {
    if (colaTareas.length === 0) {
        console.log("Cola vacía.");
        return null;
    }
    const tareaProcesada = colaTareas.shift();
    console.log(`Tarea procesada: ${tareaProcesada}. Cola actual: ${colaTareas}`);
    return tareaProcesada;
};

// Simulación de agregar y procesar tareas
agregarAlFinal("Tarea A");
agregarAlFinal("Tarea B");
agregarAlFinal("Tarea C");
removerDelInicio(); // Procesa "Tarea A"
removerDelInicio(); // Procesa "Tarea B"
removerDelInicio(); // Procesa "Tarea C"

//---------------------------//-----------------------------//

// Ejemplo 2: Cola con Límite de Tamaño para Mensajes

// Arreglo para la cola con limite
let colaMensajes = [];
const tamanoMaximo = 5;

// Acción para insertar al final (flecha)
const insertarAlFinal = (mensaje) => {
    colaMensajes.push(mensaje);
    if (colaMensajes.length > tamanoMaximo) {
        const mensajeEliminado = colaMensajes.shift();
        console.log(`Limite excedido. Eliminado: ${mensajeEliminado}. Cola actual: ${colaMensajes}`);
    } else {
        console.log(`Mensaje insertado: ${mensaje}. Cola actual: ${colaMensajes}`);
    }
};

// Acción para extraer del inicio (flecha)
const extraerDelInicio = () => {
    if (colaMensajes.length) {
        console.log("Cola vacía.");
        return null;
    }
    const mensajeExtraido = colaMensajes.shift();
    console.log(`Mensaje extraído: ${mensajeExtraido}. Cola actual: ${colaMensajes}`);
    return mensajeExtraido;
};

// Simulación del proceso
insertarAlFinal("Mensaje 1"); // Cola: "Mensaje 1"
insertarAlFinal("Mensaje 2"); // Cola: "Mensaje 1", "Mensaje 2"
insertarAlFinal("Mensaje 3"); // Cola: "Mensaje 1", "Mensaje 2", "Mensaje 3"
insertarAlFinal("Mensaje 4"); // Cola: "Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4"

insertarAlFinal("Mensaje 5");
// Cola: "Mensaje 1", "Mensaje 2", "Mensaje 3", "Mensaje 4", "Mensaje 5"]

insertarAlFinal("Mensaje 6");
/* Limite excedido, elimina "Mensaje 1", Cola: ["Mensaje 2", "Mensaje 3", "Mensaje 4",
"Mensaje 5", "Mensaje 6" */

extraerDelInicio();
// Extrae "Mensaje 2", Cola: ["Mensaje 3", "Mensaje 4", "Mensaje 5", "Mensaje 6"]


//---------------------------//-----------------------------//


// Ejemplo 3: Cola para Simular una Línea de Espera

// Arreglo para la cola
let lineaEspera = [];

// Acción para unir al final (flecha)
const unirAlFinal = (persona) => {
    lineaEspera.push(persona);
    console.log('Persona unida: ${persona). Línea actual: ${lineaEspera}');
};

// Acción para atender del inicio (flecha)
const atenderDelInicio = () => {
    if (lineaEspera.length == 0) {
        console.log("Línea vacía, nadie para atender.");
        return null;
    }
    const personaAtendida = lineaEspera.shift();
    console.log('Persona atendida: ${personaAtendida). Linea actual: ${lineaEspera}');
    return personaAtendida;
};

// Simulación del proceso
unirAlFinal("Persona X"); // Linea: ["Persona X"]
unirAlFinal("Persona Y"); // Linea: ["Persona X", "Persona: Y"]
unirAlFinal("Persona Z"); // Linea: ["Persona X", "Persona Y", "Persona Z"!

atenderDelInicio(); // Attende "Persona X", Linea: ["Persona Y", "Persona Z"]
atenderDelInicio(); // Attende "Persona Y, Linea: ["Persona Z"]
atenderDelInicio(); // Attende "Persona Z", Linea:
atenderDelInicio();// Línea vacía


//---------------------------//-----------------------------//


// Ejemplo 4: Historial de Navegación Web

// Arreglo para la pila
let historialPaginas = [];

// Acción para agregar paginu (flecka)
const agregarUltimalPagina = (url) => {
    historialPaginas.push(url);
    console.log('Pagina visitada: ${url}. Historial: ${historialPaginas}');
};
// Acetón para retroceder flechal
const retrocederPagina = () => {
    if (historialPaginas.length) {
    }
    console.log("Historial vacio.");
    return null;
    const pagina = historialPaginas.pop();
    console.log('Retrocediendo a: ${pagina}. Historial: ${historialPaginas}');
    return pagina;

};

// Simulación del proceso
agregarUltimalPagina("inicio.com");// Página Visitada: inicio.com. Historiall [inicio.com]
agregarUltimalPagina("articulos.com");// Pagina visitada: articulos.com, Historial: [inicio.com, articulos.com]
agregarUltimalPagina("detalles.com"); // Pagina visitada: detalles.com. Historial: [inicio.com, articules.com, detalles.com]
retrocederPagina();//Retrocediendos a: detalles.com. Historial: [inicio.com, articules.com]
retrocederPagina(); // Retrocediendo a: articulos.com. Historial: [inicio.com]


//---------------------------//-----------------------------//

// Ejemplo 5: Gestión de Notificaciones Emergentes

// Arreglo para la pila
let pilaNotificaciones = [];

// Acción para mostrar notificación (flecha)
const mostrarNotificacion = (mensaje) => {
    pilaNotificaciones.push(mensaje);
    console.log('Notificación: ${mensaje}. Pila: ${pilaNotificaciones}');
};

// Acción para cerrar notificación (flecha)
const cerrarNotificacion = () => {
    if (pilaNotificaciones.length === 0) {
        console.log("No hay notificaciones para cerrar.");
        return null;
    }
    const notificacion = pilaNotificaciones.pop();
    console.log('Cerrada: ${notificacion}. Pila: ${pilaNotificaciones}');
    return notificacion;
};

// Simulación del proceso
mostrarNotificacion("Mensaje Nuevo"); // Notificación: Mensaje Nuevo. Pila: [Mensaje Nuevo]
mostrarNotificacion("Batería Baja"); // Notificación: Batería Baja. Pila: [Mensaje Nuevo, Batería Baja]
mostrarNotificacion("Actualización"); // Notificación: Actualización. Pila: [Mensaje Nuevo, Batería Baja, Actualización]
cerrarNotificacion(); // Cerrada: Actualización. Pila: [Mensaje Nuevo, Batería Baja]
cerrarNotificacion(); // Cerrada: Batería Baja. Pila: [Mensaje Nuevo]