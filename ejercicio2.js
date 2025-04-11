const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...

jedi.edad = 25;
console.log(jedi)

//2. Presentación al estilo Leia Organa:
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan");

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...
const precioTotal= sable1.precio + sable2.precio;


console.log("El precio total de los sables es " + precioTotal + "€");


let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...
precioBaseGlobal = 25000;

nave1.precioFinal = precioBaseGlobal + nave1.precioBase;
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;

console.log("El precio final actualizado de las dos naves es: " + nave1.nombre + " " + nave1.precioFinal + " créditos y " + nave2.nombre + " " + nave2.precioFinal + " créditos");

