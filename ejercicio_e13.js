// 1. reduce()

/*
El método reduce ejecuta una función reductora sobre cada elemento de un arreglo,
devolviendo un único valor acumulado.
Ejemplo:
*/
const numeros = [1, 2, 3, 4, 5]; // Suma de todos los números
const suma = numeros.reduce((acc, num) => acc + num, 0); // 0 es el valor inicial del acumulador
console.log(suma); // 15

// Ejemplo con arreglo de objetos:
const productos = [ // Suma de los precios de todos los productos
{ nombre: "Camisa", precio: 20 }, // 20
{ nombre: "Pantalón", precio: 30 }, // 30
{ nombre: "Zapatos", precio: 50 } // 50
];

const total = productos.reduce((acc, prod) => acc + prod.precio, 0); // 0 es el valor inicial del acumulador
console.log(total); // 100

// 2. find()

/*
El método find devuelve el primer elemento del arreglo que cumple con la
condición.
*/

// Ejemplo:
const nombres = ["Ana", "Luis", "Pedro", "María"]; // Encuentra el primer nombre que empieza con "P"
const encontrado = nombres.find(nombre => nombre.startsWith("P")); // "Pedro"
console.log(encontrado); // "Pedro"

// Ejemplo con arreglo de objetos:
const usuarios = [ // Encuentra el usuario con id 2
{ id: 1, nombre: "Carlos" }, // { id: 1, nombre: "Carlos" },
{ id: 2, nombre: "Lucía" }, // { id: 2, nombre: "Lucía" },
{ id: 3, nombre: "Marta" } // { id: 3, nombre: "Marta" }
];

const usuario = usuarios.find(u => u.id === 2); // Encuentra el usuario con id 2
console.log(usuario); // { id: 2, nombre: "Lucía" }

// 3. every()

/*
El método every verifica si todos los elementos del arreglo cumplen con la
condición. Devuelve true o false.
*/

// Ejemplo:
const edades = [18, 22, 30, 25]; // Verifica si todas las edades son mayores o iguales a 18
const todosMayores = edades.every(edad => edad >= 18); // true
console.log(todosMayores); // true

// Ejemplo con arreglo de objetos:
const tareas = [
{ nombre: "Estudiar", completada: true },
{ nombre: "Ejercicio", completada: true },
{ nombre: "Leer", completada: false }
];
const todasCompletas = tareas.every(t => t.completada === true);
console.log(todasCompletas); // false

// 4. some()

/* 
El método some comprueba si al menos un elemento del arreglo cumple con la
condición.
 */

// Ejemplo:
const notas = [5, 8, 9, 3];
const hayReprobados = notas.some(nota => nota < 6);
console.log(hayReprobados); // true

// Ejemplo con arreglo de objetos:
const inventario = [
{ producto: "Manzanas", cantidad: 0 },
{ producto: "Naranjas", cantidad: 10 },
{ producto: "Peras", cantidad: 3 }
];

const agotado = inventario.some(item => item.cantidad === 0);
console.log(agotado); // true

// Menor a 10 
const edades1 = [25, 35, 51, 10, 8, 13];
const menoresDe10 = edades1.find(edad => edad < 10);
console.log(menoresDe10); // 8

// Ejemplo practico: metodo que devuelva el primer usuario cuyo salario sea mayor a 20000
const usuarios1 = [
    { id: 1, nombre: "Carlos", salario: 25000 },
    { id: 2, nombre: "Lucía", salario: 18000 },
    { id: 3, nombre: "Marta", salario: 22000 }
];

const usuarioAltoSalario = usuarios.find(u => u.salario > 20000);
console.log(usuarioAltoSalario); // { id: 1, nombre: "Carlos", salario: 25000 }

const usuarioEncontrado = usuarios.find(u => u.salario > 20000 && u.nombre.startsWith("C"));
console.log(usuarioEncontrado); // { id: 1, nombre: "Carlos", salario: 25000 }


// 5. filter()

/* 
El método filter crea un nuevo arreglo con todos los elementos que cumplen una
condición.
*/

// Ejemplo:
const numeros1 = [5, 10, 15, 20, 25];
const mayoresQue15 = numeros.filter(num => num > 15);
console.log(mayoresQue15); // [20, 25]

// Ejemplo con arreglo de objetos:
const empleados = [
{ nombre: "Ana", puesto: "Desarrolladora" },
{ nombre: "Luis", puesto: "Diseñador" },
{ nombre: "Marta", puesto: "Desarrolladora" }
];
const desarrolladores = empleados.filter(e => e.puesto === "Desarrolladora");
console.log(desarrolladores);

// [
// { nombre: "Ana", puesto: "Desarrolladora" },
// { nombre: "Marta", puesto: "Desarrolladora" }
// ]

//----------------------//----------------------//----------------------//
const personas = [
    { id: 1, nombre: "Ana", edad: 17 },
    { id: 2, nombre: "Luis", edad: 22 },
    { id: 3, nombre: "Marta", edad: 30 },
    { id: 4, nombre: "Pedro", edad: 15 },
    { id: 5, nombre: "Sofía", edad: 25 },
    { id: 6, nombre: "Diego", edad: 40 },
    { id: 7, nombre: "Carla", edad: 19 },
    { id: 8, nombre: "Jorge", edad: 33 },
    { id: 9, nombre: "Lucía", edad: 28 },
    { id: 10, nombre: "Raúl", edad: 16 },
    { id: 11, nombre: "Elena", edad: 21 },
    { id: 12, nombre: "Andrés", edad: 35 }
];

// Ejercicios de arreglos y evaluación
// Empleando el arreglo de objetos adjunto, resuelva los siguientes enunciados:

/* 1. Obtén un nuevo arreglo con todas las personas cuya edad sea mayor o igual
a 18 años.*/

const mayoresDeEdad = personas.filter(p => p.edad >= 18); // Filtra personas con edad >= 18
console.log(mayoresDeEdad); // Muestra el nuevo arreglo

/* 2. Encuentra la primera persona en el arreglo cuyo nombre comience con la
letra "L".*/

const personaConL = personas.find(p => p.nombre.startsWith("L")); // Encuentra la primera persona cuyo nombre empieza con "L"
console.log(personaConL); // Muestra la persona encontrada

/* 3. Calcula la suma total de las edades de todas las personas en el arreglo.*/

const sumaEdades = personas.reduce((acc, p) => acc + p.edad, 0); // Suma las edades de todas las personas
console.log(sumaEdades); // Muestra la suma total de las edades

/* 4. Verifica si todas las personas en el arreglo son mayores o iguales a 15 años.*/

const todasMayores15 = personas.every(p => p.edad >= 15); // Verifica si todas las personas tienen edad >= 15
console.log(todasMayores15); // Muestra true o false

/* 5. Comprueba si existe al menos una persona en el arreglo que tenga 40 años.*/

const existe40 = personas.some(p => p.edad === 40); // Verifica si hay al menos una persona con 40 años
console.log(existe40); // Muestra true o false