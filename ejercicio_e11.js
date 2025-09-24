

// arreglo de numeros
let numeros = [5, 2, 9, 1, 7];

// orden asendente
numeros.sort((a, b) => a - b);
console.log(numeros); //[ 1, 2, 3, 7, 9]

// orden desendente 
numeros.sort((a, b) => b - a);
console.log(numeros);

// Areglo de cadena
let frutas = ["Banana","Mansana","Naranja","Uva"];
frutas.sort();
console.log(frutas);

// Orden alfabetico inverso
let frutas2 = ["Banana","Mansana","Naranja","Uva"];
frutas.sort((a,b) => b.localeCompare(a));
console.log(frutas2);


//------------------------------//---------------------------//


let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 20}
];

// ordenar por edad  (asendente)
personas.sort((a,b) => a.edad - b.edad);
console.log(personas);

// 
personas.sort((a,b) => a.nombre.localeCompare(b.nombre));
console.log(personas);

//
let numeros1 = [1, 2, 3, 4, 5];
numeros1.reverse();
console.log(numeros1);

//
let palabras = ["hola", "mundo", "javascript"];
palabras.reverse();
console.log(palabras);

//
let calificaciones = [
    {Estudiante: "Eliab", Asignatira: "Matematica",calificaciones: 60},
    {Estudiante: "Xiomara", Asignatira: "Historia",calificaciones: 100},
    {Estudiante: "Camilo", Asignatira: "Español",calificaciones: 80},
    {Estudiante: "Ramiro", Asignatira: "Fisica",calificaciones: 55},
    {Estudiante: "Ana", Asignatira: "Quimica",calificaciones: 77},
];

 //
calificaciones.log((a,b) => b.asignatura.localeCompare(a.asignatura));
console.log(calificaciones);

// 
calificaciones.log((a,b) => a.asignatura - b.asignatura);
console.log(calificaciones);



//------------------------------//---------------------------//


//--Ejercicios de arreglos y ordenamiento-//

/*Dado un arreglo de números [10, 3, 8, 1, 6], ordénalo en orden ascendente
utilizando el método sort().*/

let arreglo = [10, 3, 8, 1, 6];
arreglo.sort((a, b) => a - b);
console.log(arreglo); // [1, 3, 6, 8, 10]


/* Dado un arreglo de cadenas ["perro", "gato", "elefante", "ardilla"], ordénalo
alfabéticamente sin modificar el arreglo original.*/

let animales = ["perro", "gato", "elefante", "ardilla"];
let animalesOrdenados = [...animales].sort();
console.log("Original:", animales); // ["perro", "gato", "elefante", "ardilla"]
console.log("Ordenado:", animalesOrdenados); // ["ardilla", "elefante", "gato", "perro"]


/* Dado un arreglo de objetos [{ nombre: "Luis", puntaje: 85 }, { nombre: "Marta",
puntaje: 92 }, { nombre: "Sofía", puntaje: 78 }], ordénalo por puntaje en orden
descendente. */

let estudiantes = [
    { nombre: "Luis", puntaje: 85 },
    { nombre: "Marta", puntaje: 92 },
    { nombre: "Sofía", puntaje: 78 }
];

estudiantes.sort((a, b) => b.puntaje - a.puntaje);
console.log(estudiantes);


/* Dado un arreglo de números [4, 9, 2, 7, 5], invierte su orden utilizando el
método reverse(). */

let numeros2 = [4, 9, 2, 7, 5];
numeros2.reverse();
console.log(numeros2); // [5, 7, 2, 9, 4]


/* Dado un arreglo de objetos [{ producto: "Laptop", precio: 1200 }, { producto:
"Teléfono", precio: 800 }, { producto: "Tableta", precio: 600 }], ordénalo por
precio en orden ascendente sin modificar el arreglo original. */

let productos = [
    { producto: "Laptop", precio: 1200 },
    { producto: "Teléfono", precio: 800 },
    { producto: "Tableta", precio: 600 }
];

let productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log("Original:", productos);
console.log("Ordenado por precio ascendente:", productosOrdenados);


/* Dado un arreglo de cadenas ["manzana", "banana", "kiwi", "fresa"], invierte
su orden y luego ordénalo alfabéticamente. */

let frutas3 = ["manzana", "banana", "kiwi", "fresa"];
frutas3.reverse();
console.log("Invertido:", frutas3); // ["fresa", "kiwi", "banana", "manzana"]
frutas3.sort();
console.log("Ordenado alfabéticamente:", frutas3); // ["banana", "fresa", "kiwi", "manzana"]

