// 1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola
let nombre = "Maryina";
console.log (nombre);

// 2. Declara dos variables edad y ciudad y muéstralas juntas en un solo console.log.
let edad = 20;
let ciudad = "Santo Tomas"
console.log ("Edad: " + edad, "Ciudad: " + ciudad);

// 3. Declara una constante PI con el valor 3.1416 y muéstrala en consola.
const PI = 3.1416;
console.log("Valor de PI: " + PI);

// 4. Declara tres variables con valores numéricos y calcula su promedio.
let a = 50;
let b = 70;
let c = 90;

let promedio = (a + b + c) / 3;
console.log(promedio);

// 5. Declara una variable esMayorDeEdad con un valor booleano y muéstrala.
let esMayorDeEdad = true;
console.log("¿Es mayor de edad? " + esMayorDeEdad);

// 6. Declara dos números y muestra su suma.
let n1 = 15;
let n2 = 20;
let suma = n1 + n2;
console.log(suma);

// 7. Declara dos números y muestra su resta, multiplicación y división.
let num1 = 100;
let num2 = 20;

let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

console.log("Resta: " + resta, " Multiplicación: " + multiplicacion, " Division: " + division);

// 8. Declara dos números y muestra el resultado de elevar el primero al segundo.

let base = 3;
let exponente = 4;
let resultadoPotencia = base ** exponente;
console.log("Resultado de elevar " + base, " a la " + exponente, "es: " + resultadoPotencia);


// 9. Declara una variable precio y otra descuento (en %) y calcula el precio final.

let precio = 100;
let descuento = 20; // porcentaje
let precioFinal = precio - (precio * descuento / 100);
console.log("Precio final con descuento: " + precioFinal);


// 10.Usando un for, muestra en consola los números del 1 al 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 11.Usando un for, muestra en consola la tabla de multiplicar del 5.

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

// 12.Usando un while, muestra en consola los números pares del 2 al 20.

let i = 2;
while (i <= 20) {
    console.log(i);
    i += 2; // suma 2 para obtener el siguiente número par
}

// 13.Crea una función saludar que reciba un nombre y muestre un saludo.

function saludar(nombre) {
    console.log("¡Hola, " + nombre + "! Estas listo para la tortura que es la universidad. Por culpa del gobierno ahora tenemos que estudiar 5 años para ser ingenieros. ¡Ánimo!");
}

saludar("Maryina");

// 14.Crea una función sumar que reciba dos números y retorne su suma.

function sumar(num1, num2) {
    return num1 + num2;
}
console.log(sumar(10, 20));

// 15.Crea una función esPar que reciba un número y retorne true si es par, false si no lo es.

function esPar(num){
    return num % 2 === 0;
}
console.log(esPar(10));

// 16.Crea una función areaRectangulo que reciba base y altura y retorne su área.

function areaRectangulo(base, altura) {
    return base * altura;
}

console.log(areaRectangulo(5, 3)); // Muestra 15

// 17.Crea una función flecha multiplicar que reciba dos números y retorne su producto.

const multiplicar = (a, b) => a * b;

console.log(multiplicar(6, 7)); // Muestra 42

// 18.Crea una función flecha convertirCelsiusAFahrenheit que reciba grados Celsius y retorne su equivalente en Fahrenheit.

const convertirCelsiusAFahrenheit = celsius => (celsius * 9/5) + 32;
console.log(convertirCelsiusAFahrenheit(25)); // Muestra 77

// 19.Crea una función flecha mayorDeDos que reciba dos números y retorne el mayor.
let MayorDeDosNumeros = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
}

console.log(MayorDeDosNumeros(10,20));

// 20.Crea una función flecha calcularIVA que reciba un precio y retorne el precio más IVA (15%).

const calcularIVA = precio => precio * 1.15;
console.log(calcularIVA(100)); // Muestra 115

// 21.Declara un arreglo con 5 nombres y recórrelo con un for mostrando cada nombre.

let nombres = ["Yaleska", "Maryina", "Daniel", "Kreivin", "Ernesto"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 22.Declara un arreglo con 5 números y usa un for para mostrar solo los números mayores que 10.

let numeros = [5, 12, 8, 25, 17];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(numeros[i]);
    }
}

// 23.Declara un arreglo con 5 palabras y usa un for para mostrar su longitud (.length).

let palabras = ["universidad", "ingeniero", "programar", "javascript", "copilot"];
for (let i = 0; i < palabras.length; i++) {
    console.log(palabras[i] + " tiene " + palabras[i].length + " letras");
}

// 24.Declara un objeto persona con propiedades nombre, edad y ciudad. Usa un for...in para mostrar cada clave y valor.

let persona = {
    nombre: "Maryina",
    edad: 20,
    ciudad: "Santo Tomas"
};

for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}

// 25.Declara un arreglo de objetos con 3 productos (nombre y precio) y usa un for para mostrar solo los nombres de los productos.

let productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 30 }
];

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre);
}