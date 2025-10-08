// Búsqueda lineal o binaria

/* Funcionamiento:
1. Empieza desde el primer elemento del arreglo.
2. Compara el valor actual con el valor buscado.
3. Si coinciden, devuelve su posición.
4. Si no hay coincidencia, sigue al siguiente elemento.
5. Si termina el recorrido sin encontrarlo devuelve -1. */

function busquedaLineal(arr, valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i; // Retorna el índice si se encuentra el valor
        }
    }
    return -1; // Retorna -1 si no se encuentra el valor
}

let numeros = [8 , 3, 10, 5, 2];
console.log(busquedaLineal(numeros, 10)); // Ejemplo de uso de búsqueda lineal
console.log(busquedaLineal(numeros, 7)); // Ejemplo de uso de búsqueda lineal

// 2. Búsqueda Binaria

/* Funcionamiento:
1. Se compara el valor buscado con el elemento del medio.
2. Si es igual, encontrado.
3. Si el valor buscado es menor, se busca en la mitad izquierda.
4. Si es mayor, se busca en la mitad derecha.
5. Se repite el proceso hasta encontrarlo o hasta que no queden elementos. */ 

function busquedaBinaria(arr, valor) {
    let inicio = 0;
    let fin = arr.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (arr[medio] === valor) {
            return medio; // Retorna el índice si se encuentra el valor
        } else{ 
            if (arr[medio] < valor) {
                inicio = medio + 1; // Busca en la mitad derecha
            } else {
                fin = medio - 1; // Busca en la mitad izquierda
            }
        }
    }
    return -1; // Retorna -1 si no se encuentra el valor
}

let numeros1 = [2, 5, 8, 10, 15, 20];
console.log("Arreglo:", numeros1, "Resultado búsqueda binaria de 10:", busquedaBinaria(numeros1, 10)); // Ejemplo de uso de búsqueda binaria, debe estar ordenado
console.log("Arreglo:", numeros1, "Resultado búsqueda binaria de 9:", busquedaBinaria(numeros1, 9)); // Ejemplo de uso de búsqueda binaria


// 3. Búsqueda lineal con caracteres o texto


function busquedaLineal1(arr, valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i; // Retorna el índice si se encuentra el valor
        }
    }
    return -1; // Retorna -1 si no se encuentra el valor
}

let letras = ["a", "c", "d", "f", "g"];
console.log(busquedaLineal1(letras, "g")); // Ejemplo de uso de búsqueda lineal con texto
console.log(busquedaLineal1(letras, "f")); // Ejemplo de uso de búsqueda lineal con texto

// 4. Búsqueda binaria con texto o caracteres

function busquedaBinaria1(arr, valor) {
    let inicio = 0;
    let fin = arr.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        if (arr[medio] === valor) {
            return medio; // Retorna el índice si se encuentra el valor
        } else {
            if (arr[medio] < valor) {
                inicio = medio + 1; // Busca en la mitad derecha
            } else {
                fin = medio - 1; // Busca en la mitad izquierda
            }
        }
    }
    return -1; // Retorna -1 si no se encuentra el valor
}
let letras1 = ["a", "b", "c", "d", "e", "f"];
console.log(busquedaBinaria1(letras1, "d")); // Ejemplo de uso de búsqueda binaria con texto
console.log(busquedaBinaria1(letras1, "z")); // Ejemplo de uso de búsqueda binaria con texto

// -------------------------------------------------------

const productos = [
{ id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 1200, stock: 10 },
{ id: 2, nombre: "Celular", categoria: "Electrónica", precio: 800, stock: 25 },
{ id: 3, nombre:"Teclado", categoria: "Accesorios", precio: 50, stock: 100 },
{ id: 4, nombre: "Mouse", categoria: "Accesorios", precio: 30, stock: 150 },
{ id: 5, nombre: "Monitor", categoria: "Electrónica", precio: 300, stock: 20 },
{ id: 6, nombre: "Silla ", categoria: "Muebles", precio: 250, stock: 5 },
{ id: 7, nombre: "Escritorio", categoria: "Muebles", precio: 400, stock: 8 },
{ id: 8, nombre: "Audífonos", categoria: "Accesorios", precio: 70, stock: 60 },
{ id: 9, nombre: "Tablet", categoria: "Electrónica", precio: 600, stock: 12 },
{ id: 10, nombre: "Impresora", categoria: "Electrónica", precio: 200, stock: 15 },
{ id: 11, nombre: "Cámara", categoria: "Electrónica", precio: 1000, stock: 7 },
{ id: 12, nombre: "Smartwatch", categoria: "Electrónica", precio: 250, stock: 18 },
{ id: 13, nombre: "Parlante", categoria: "Accesorios", precio: 120, stock: 30 },
{ id: 14, nombre: "Microondas", categoria: "Electrodomésticos", precio: 180, stock: 12 },
{ id: 15, nombre: "Refrigeradora", categoria: "Electrodomésticos", precio: 900, stock: 4 },
{ id: 16, nombre: "Lavadora", categoria: "Electrodomésticos", precio: 700, stock: 6 },
{ id: 17, nombre: "Secadora", categoria: "Electrodomésticos", precio: 650, stock: 3 },
{ id: 18, nombre: "Cafetera", categoria: "Electrodomésticos", precio: 90, stock: 25 },
{ id: 19, nombre: "Ventilador", categoria:"Electrodomésticos", precio: 60, stock: 40 },
{ id: 20, nombre: "Licuadora", categoria: "Electrodomésticos", precio: 110, stock: 22 },
{ id: 21, nombre: "Cama", categoria: "Muebles", precio: 800, stock: 2 },
{ id: 22, nombre: "Ropero", categoria: "Muebles", precio: 500, stock: 3 },
{ id: 23, nombre: "Estufa", categoria: "Electrodomésticos", precio: 750, stock: 5 },
{ id: 24, nombre: "Horno", categoria: "Electrodomésticos", precio: 400, stock: 6 },
{ id: 25, nombre: "Lámpara", categoria: "Accesorios", precio: 45, stock: 50 },
{ id: 26, nombre: "Router", categoria: "Electrónica", precio: 130, stock: 20 },
{ id: 27, nombre: "Disco Duro", categoria: "Electrónica", precio: 150, stock: 35 },
{ id: 28, nombre: "Memoria USB", categoria: "Accesorios", precio: 25, stock: 200 },
{ id: 29, nombre: "Cargador", categoria: "Accesorios", precio: 35, stock: 90 },
{ id: 30, nombre: "Proyector", categoria: "Electrónica", precio: 600, stock: 4 }
];

// Tomando en cuenta el arreglo de productos, resuelva los siguientes enunciados:

/*Crea una función que reciba un arreglo de objetos y busque un producto
por nombre (por ejemplo, "Monitor"), usando búsqueda lineal.*/
function buscarProductoPorNombre(arr, nombreProducto) { //
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nombre === nombreProducto) {
            return arr[i]; // Retorna el objeto si se encuentra el producto
        }
    }
    return null; // Retorna null si no se encuentra el producto
}

// Ejemplo de uso:
console.log(buscarProductoPorNombre(productos, "Monitor"));

/* Crea una función que reciba un arreglo de objetos y busque todos los
productos de una categoría específica (por ejemplo,
"Electrodomésticos"), usando búsqueda lineal. */
function buscarProductosPorCategoria(arr, categoria) {
    let resultados = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].categoria === categoria) {
            resultados.push(arr[i]);
        }
    }
    return resultados;
}

// Ejemplo de uso:
console.log(buscarProductosPorCategoria(productos, "Electrodomésticos"));

/* Crea una función que reciba un arreglo de objetos y busque un producto
con un precio exacto (por ejemplo, 600), usando búsqueda lineal. */
function buscarProductoPorPrecio(arr, precio) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].precio === precio) {
            return arr[i]; // Retorna el objeto si se encuentra el producto
        }
    }
    return null; // Retorna null si no se encuentra el producto
}

// Ejemplo de uso:
console.log(buscarProductoPorPrecio(productos, 600));

/* Crea una función que reciba un arreglo de objetos y busque todos los
productos cuyo precio esté dentro de un rango (por ejemplo, entre 100
y 500), usando búsqueda lineal. */
function buscarProductosPorRangoPrecio(arr, precioMin, precioMax) {
    let resultados = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].precio >= precioMin && arr[i].precio <= precioMax) {
            resultados.push(arr[i]);
        }
    }
    return resultados;
}

// Ejemplo de uso:
console.log(buscarProductosPorRangoPrecio(productos, 100, 500));

/* Crea una función que reciba un arreglo de objetos y busque los productos
con stock menor a un valor dado (por ejemplo, 10), usando búsqueda
lineal. */
function buscarProductosPorStockMinimo(arr, stockMinimo) {
    let resultados = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].stock < stockMinimo) {
            resultados.push(arr[i]);
        }
    }
    return resultados;
}

// Ejemplo de uso:
console.log(buscarProductosPorStockMinimo(productos, 10));

/* Crea una función que reciba un arreglo de objetos y busque un producto
por su ID usando búsqueda binaria (el arreglo debe estar ordenado por
id). */
function buscarProductoPorId(arr, id) {
    let bajo = 0;
    let alto = arr.length - 1;
    while (bajo <= alto) {
        let medio = Math.floor((bajo + alto) / 2);
        if (arr[medio].id === id) {
            return arr[medio];
        } else if (arr[medio].id < id) {
            bajo = medio + 1;
        } else {
            alto = medio - 1;
        }
    }
    return null;
}

// Ejemplo de uso:
console.log(buscarProductoPorId(productos, 5));
console.log(buscarProductoPorId(productos, 100));

/* Crea una función que reciba un arreglo de objetos y busque un producto
por precio usando búsqueda binaria (el arreglo debe estar ordenado por
precio). */
function buscarProductoPorPrecio(arr, precio) {
    let bajo = 0;
    let alto = arr.length - 1;
    while (bajo <= alto) {
        let medio = Math.floor((bajo + alto) / 2);
        if (arr[medio].precio === precio) {
            return arr[medio];
        } else if (arr[medio].precio < precio) {
            bajo = medio + 1;
        } else {
            alto = medio - 1;
        }
    }
    return null;
}

// Ejemplo de uso:
console.log(buscarProductoPorPrecio(productos, 600));
console.log(buscarProductoPorPrecio(productos, 1000));

/* Crea una función que reciba un arreglo de objetos y busque un producto
por nombre usando búsqueda binaria (el arreglo debe estar ordenado
alfabéticamente por nombre). */
function buscarProductoPorNombre(arr, nombre) {
    let bajo = 0;
    let alto = arr.length - 1;
    while (bajo <= alto) {
        let medio = Math.floor((bajo + alto) / 2);
        if (arr[medio].nombre === nombre) {
            return arr[medio];
        } else if (arr[medio].nombre < nombre) {
            bajo = medio + 1;
        } else {
            alto = medio - 1;
        }
    }
    return null;
}

// Ejemplo de uso:
console.log(buscarProductoPorNombre(productos, "Monitor"));

/* Crea una función que reciba un arreglo de objetos y compare el tiempo de
ejecución entre búsqueda lineal y binaria al buscar un mismo producto. */
function compararTiemposBusqueda(arr, nombreProducto) { // "Monitor"
    // Búsqueda lineal
    function busquedaLinealPorNombre(arr, nombreProducto) { 
        for (let i = 0; i < arr.length; i++) { //
            if (arr[i].nombre === nombreProducto) {
                return arr[i];
            }
        }
        return null;
    }

    // luego la búsqueda binaria (arreglo debe estar ordenado alfabéticamente por nombre)
    function busquedaBinariaPorNombre(arr, nombreProducto) {
        let bajo = 0;
        let alto = arr.length - 1;
        while (bajo <= alto) {
            let medio = Math.floor((bajo + alto) / 2);
            if (arr[medio].nombre === nombreProducto) {
                return arr[medio];
            } else if (arr[medio].nombre < nombreProducto) {
                bajo = medio + 1;
            } else {
                alto = medio - 1;
            }
        }
        return null;
    }

    // Ordenar el arreglo por nombre para la búsqueda binaria
    let arrOrdenado = [arr].sort((a, b) => a.nombre.localeCompare(b.nombre));

    console.time("Búsqueda Lineal");
    let resultadoLineal = busquedaLinealPorNombre(arr, nombreProducto);
    console.timeEnd("Búsqueda Lineal");
    console.time("Búsqueda Binaria");
    let resultadoBinaria = busquedaBinariaPorNombre(arrOrdenado, nombreProducto);
    console.timeEnd("Búsqueda Binaria");
    return { resultadoLineal, resultadoBinaria };
}                                   
// Ejemplo de uso:
console.log(compararTiemposBusqueda(productos, "Monitor"));

/* Crea una función que reciba un arreglo de objetos y verifique si un
producto con un nombre dado existe o no en el arreglo, devolviendo true
o false (búsqueda lineal). */
function existeProductoPorNombre(arr, nombreProducto) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nombre === nombreProducto) {
            return true;
        }
    }
    return false;
}

// Ejemplo de uso:
console.log(existeProductoPorNombre(productos, "Monitor"));
console.log(existeProductoPorNombre(productos, "chinela"));
