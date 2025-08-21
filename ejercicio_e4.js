const universidad = {
  nombre: "Universidad Central",
  ubicacion: {
    ciudad: "Sevilla",
    direccion: {
      calle: "Av. Principal",
      numero: 123
    }
  },
  facultades: [
    {
      nombre: "Ingeniería",
      carreras: [
        {
          nombre: "Informática",
          estudiantes: [
            { nombre: "Laura", edad: 20, hobbies: ["programar", "ajedrez"] },
            { nombre: "Javier", edad: 22, hobbies: ["fútbol", "cine"] }
          ]
        },
        {
          nombre: "Civil",
          estudiantes: [
            { nombre: "Sofía", edad: 21, hobbies: ["fotografía", "leer"] }
          ]
        }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        {
          nombre: "Derecho Penal",
          estudiantes: [
            { nombre: "Andrés", edad: 23, hobbies: ["debate", "natación"] }
          ]
        }
      ]
    }
  ]
};

// 1. Muestra el nombre de la universidad.
const mostrarNombreUniversidad = (universidad) => universidad.nombre;
console.log(mostrarNombreUniversidad(universidad));



// 2. Muestra la calle donde está ubicada la universidad.
const mostrarCalleUniversidad = universidad => {
    console.log(universidad.ubicacion.direccion.calle);
};

// 3. Muestra el nombre de la primera facultad.
const mostrarPrimeraFacultad = universidad => {
    console.log(universidad.facultades[0].nombre);
};

// 4. Muestra el nombre de la segunda carrera en la primera facultad.
const mostrarSegundaCarreraPrimeraFacultad = universidad => {
    console.log(universidad.facultades[0].carreras[1].nombre);
};

// 5. Muestra el nombre del primer estudiante de la carrera de Informática.
const mostrarPrimerEstudianteInformatica = universidad => {
    console.log(universidad.facultades[0].carreras[0].estudiantes[0].nombre);
};

// 6.Muestra el segundo hobby de Laura.
const mostrarSegundoHobbyLaura = universidad => {
    console.log(universidad.facultades[0].carreras[0].estudiantes[0].hobbies[1]);
};

// 7. Muestra la edad de Sofía.
const mostrarEdadSofia = universidad => {
    console.log(universidad.facultades[0].carreras[1].estudiantes[0].edad);
};

// 8. Muestra el primer hobby del estudiante de Derecho Penal.
const mostrarPrimerHobbyDerechoPenal = universidad => {
    console.log(universidad.facultades[1].carreras[0].estudiantes[0].hobbies[0]);
};