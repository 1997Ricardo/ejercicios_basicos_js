

const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
    let palabraMasLarga = stringList[0]; // empezamos suponiendo que la primera es la más larga
  
    for (let i = 1; i < stringList.length; i++) {
      if (stringList[i].length > palabraMasLarga.length) {
        palabraMasLarga = stringList[i]; // actualizamos si encontramos una más larga
      }
    }
  
    return palabraMasLarga;
  }
  
const resultado = findLongestWord(avengers);
console.log("La palabra más larga es:", resultado);
