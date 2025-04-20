const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  let suma = 0;
  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (typeof element === 'number') {
        suma += element;
    } else if (typeof element === 'string'){
        suma += element.length;
    }
    
  }
  return suma;
}

const resultado = averageWord(mixedElements);
console.log("Resultado combinado:", resultado);
