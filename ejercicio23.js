const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];

const peliculasPequeñas = [];
const peliculasMedianas = [];
const peliculasGrandes = [];

for (const pelicula of movies) {
    if(pelicula.durationInMinutes < 100) {
        peliculasPequeñas.push(pelicula);
    }else if (pelicula.durationInMinutes >= 100 && pelicula.durationInMinutes <= 200){
        peliculasMedianas.push(pelicula);
    }else if (pelicula.durationInMinutes > 200){
        peliculasGrandes.push(pelicula);
    }
    
}

console.log("📽 Películas pequeñas:", peliculasPequeñas);
console.log("🎬 Películas medianas:", peliculasMedianas);
console.log("🍿 Películas grandes:", peliculasGrandes);