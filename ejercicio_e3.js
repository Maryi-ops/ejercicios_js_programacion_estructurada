const persona = {
    nombre: "Maryina",
    edad: 20,
    direccion: { 
    ciudad: "Santo Tomas",
    codigo: "12345"
},
hobbies: ["leer", "Dibujar", "dormir"]
};

// Muestra el nombre de la persona. 
const mostrarNombre = persona => {
    console.log(persona.nombre);
};

// Muestra la edad de la persona.
const mostrarEdad = persona => {
    console.log(persona.edad);
};

// Muestra la ciudad donde vive la persona.
const mostrarCiudad = persona => {
    console.log(persona.direccion.ciudad);
};

// Muestra el código postal usando corchetes.
const mostrarCodigoPostal = persona => {
    console.log(persona["direccion"]["codigo"]);
};

// Muestra el segundo hobby de la persona.
const mostrarSegundoHobby = persona => {
    console.log(persona.hobbies[1]);
}; 