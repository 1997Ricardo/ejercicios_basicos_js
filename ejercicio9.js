const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let suma = 0; //Empezamos con una suma inicial 0
  for (let i = 0; i < numberList.length; i++) {
    suma +=numberList[i]; //En cada vuelta, sumamos el numero actual
    
  }
  return suma; //Devolvemos el total al final
}

const resultado = sumNumbers(numbers);
console.log("La suma total es:", resultado);
