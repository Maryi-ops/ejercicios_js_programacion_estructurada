const partidos = [
{
    juego : 3,
    LosToros : 0,
    SanFernando : 1
},
{
    juego : 4,
    LosToros : 3,
    SanFernando : 1
},
{
    juego : 5,
    LosToros : 2,
    SanFernando : 4
},
{
    juego : 6,
    LosToros : 5,
    SanFernando : 3
},
{
    juego : 7,
    LosToros : 10,
    SanFernando : 5
},
{
    juego : 8,
    LosToros : 6,
    SanFernando : 4
},
{
    juego : 9,
    LosToros : 5,
    SanFernando : 3
}
];

// mostrar todos lo partidos
numPartidos = partidos.length;

for (let i = 0; i < numPartidos; i++) {
    const p = partidos.shift();
    console.log(`Partido ${p.juego}: Los Toros ${p.LosToros} 
        - San Fernando ${p.SanFernando}`);
};


// Resultado del partido 1
const p1 = partidos.shift();
console.log(`Resultado del partido ${p1.juego}: Los Toros ${p1.LosToros} 
    - San Fernando ${p1.SanFernando}`);

// Resultado del partido 2
const p2 = partidos.shift();
console.log(`Resultado del partido ${p2.juego}: Los Toros ${p2.LosToros} 
    - San Fernando ${p2.SanFernando}`);

// Resultado del partido 3
const p3 = partidos.shift();
console.log(`Resultado del partido ${p3.juego}: Los Toros ${p3.LosToros} 
    - San Fernando ${p3.SanFernando}`);

// Resultado del partido 4
const p4 = partidos.shift();
console.log(`Resultado del partido ${p4.juego}: Los Toros ${p4.LosToros} 
    - San Fernando ${p4.SanFernando}`);
// Resultado del partido 5
const p5 = partidos.shift();
console.log(`Resultado del partido ${p5.juego}: Los Toros ${p5.LosToros} 
    - San Fernando ${p5.SanFernando}`);

// Resultado del partido 6
const p6 = partidos.shift();
console.log(`Resultado del partido ${p6.juego}: Los Toros ${p6.LosToros} 
    - San Fernando ${p6.SanFernando}`);

// Resultado del partido 7
const p7 = partidos.shift();
console.log(`Resultado del partido ${p7.juego}: Los Toros ${p7.LosToros} 
    - San Fernando ${p7.SanFernando}`);


