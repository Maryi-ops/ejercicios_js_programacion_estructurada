// Ejercicios #1. Función flecha que añade uno o más elementos al final de un arreglo y devuelve el nuevo arreglo
const agregarAlFinal = (arreglo, elementos) => {
    arreglo.push(elementos);
    return arreglo;
};

// Ejemplo de uso:
let miArreglo = [1, 2, 3];
let resultado = agregarAlFinal(miArreglo, 4, 5, 6);
console.log(resultado, 4); // [1, 2, 3, 4, 5, 6]


// Ejercicios #2. Función flecha que añade uno o más elementos al inicio de un arreglo y devuelve el nuevo arreglo
const agregarAlInicio = (arreglo, elementos) => {
    arreglo.unshift(elementos);
    return arreglo;
};

// Ejemplo de uso:
let miArreglo2 = [1, 2, 3];
let resultado2 = agregarAlInicio(miArreglo2, -1, 0);
console.log(resultado2, -1, 0); // [-1, 0, 1, 2, 3]


// Ejercicios #3. Función flecha que elimina y devuelve el último elemento de un arreglo
const eliminarUltimo = arreglo => arreglo.pop();

// Ejemplo de uso:
let miArreglo3 = [10, 20, 30];
let ultimo = eliminarUltimo(miArreglo3);
console.log(ultimo, 30);      // 30
console.log(miArreglo3, 10);  // [10, 20]

// Ejemplo del profe
let eliminaElementoFinal = (arreglo) => {
    let ultimo = arreglo.pop();
    return ultimo;
}

// Ejercicios #4. Función flecha que elimina y devuelve el primer elemento de un arreglo
const eliminarPrimero = arreglo => arreglo.shift();

// Ejemplo de uso:
let miArreglo4 = [100, 200, 300];
let primero = eliminarPrimero(miArreglo4);
console.log(primero, 100);      // 100
console.log(miArreglo4, 200, 300);


// Ejercicios #5. Función flecha que devuelve el índice de la primera aparición de un elemento, o -1 si no lo encuentra
const buscarIndice = (arreglo, elemento, inicio = 0) => arreglo.indexOf(elemento, inicio);

// Ejemplo de uso:
let miArreglo5 = [5, 10, 15, 10, 20];
let indice1 = buscarIndice(miArreglo5, 10);        // 1
let indice2 = buscarIndice(miArreglo5, 10, 2);     // 3
let indice3 = buscarIndice(miArreglo5, 99);        // -1
console.log(indice1, 1); // 1
console.log(indice2, 3); // 3
console.log(indice3, -1); // -1


// Ejercicios #6. Función flecha que devuelve la cantidad de elementos en un arreglo
const cantidadElementos = arreglo => arreglo.length;

// Ejemplo de uso:
let miArreglo6 = [1, 2, 3, 4, 5];
console.log(cantidadElementos(miArreglo6,5)); // 5

// Ejercicios #7. Función flecha que ordena un arreglo de números en orden ascendente usando una función comparadora
const ordenarAscendente = arreglo => arreglo.sort((a, b) => a - b);

// Ejemplo de uso:
let miArreglo7 = [5, 2, 9, 1, 7];
console.log(ordenarAscendente(miArreglo7)); // [1, 2, 5,

// Ejercicios #8. Función flecha que une los elementos de un arreglo en una cadena usando un separador
const unirConSeparador = (arreglo, separador) => arreglo.join(separador);

// Ejemplo de uso:
let miArreglo8 = ['a', 'b', 'c'];
console.log(unirConSeparador(miArreglo8, '-')); // 'a-


// Ejercicios #9. Función flecha que combina uno o más arreglos y/o elementos en un nuevo arreglo
const combinarArreglos = (...args) => [].concat(...args);

// Ejemplo de uso:
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = combinarArreglos(arr1, arr2, 5, 6);
console.log(combinado); // [1, 2, 3, 4, 5, 6]


// Ejercicios #10. Función flecha que ejecuta una función callback por cada elemento del arreglo sin devolver un nuevo arreglo
const paraCadaElemento = (arreglo, callback) => arreglo.forEach(callback);

// Ejemplo de uso:
let miArreglo9 = ['x', 'y', 'z'];
paraCadaElemento(miArreglo9, elemento => console.log(elemento)); // Imprime: x,


// Ejercicios #11. Función flecha que devuelve un nuevo arreglo con los resultados de aplicar una función a cada elemento
const mapearArreglo = (arreglo, callback) => arreglo.map(callback);

// Ejemplo de uso:
let miArreglo10 = [1, 2, 3];
let resultadoMap = mapearArreglo(miArreglo10, x => x * 2);
console.log(resultadoMap); //


// Ejercicios #12. Función flecha que devuelve un nuevo arreglo con los elementos que cumplen la condición definida por la función callback
const filtrarArreglo = (arreglo, callback) => arreglo.filter(callback);

// Ejemplo de uso:
let miArreglo11 = [1, 2, 3, 4, 5];
let resultadoFiltrado = filtrarArreglo(miArreglo11, x => x % 2 === 0);
console.log(resultadoFiltrado); // [2, 4]


// Ejercicios #13. Función flecha que reduce un arreglo a un solo valor usando una función acumuladora y un valor inicial opcional
const reducirArreglo = (arreglo, callback, valorInicial) =>
    valorInicial !== undefined
        ? arreglo.reduce(callback, valorInicial)
        : arreglo.reduce(callback);

// Ejemplo de uso:
let miArreglo12 = [1, 2, 3, 4];
let suma = reducirArreglo(miArreglo12, (acum, actual) => acum + actual, 0);
console.log(suma); // 10

let producto = reducirArreglo(miArreglo12, (acum, actual) => acum * actual);
console.log(producto);