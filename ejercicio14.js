const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function repeatCounter(list) {
    const contador = {};
    for (let palabra of list) {
        if (contador[palabra]) {
            contador[palabra] ++;
        }else{
            contador[palabra]=1;
        }
        
    }
    return contador;
  }

  const resultado = repeatCounter(words);
  console.log("Conteo de palabras;", resultado);
  