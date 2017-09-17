let peces = [];
let recetas = [];

peces.forEach((pez)=>{ pez.recetas = [];
    const inicio = Math.random() * (recetas.length);
    const delta = Math.random() * (5 - 1) + 1;
    pez.recetas = pez.slice(inicio, inicio + delta);
});

