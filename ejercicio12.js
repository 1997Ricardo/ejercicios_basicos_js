const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
 
     const unicos = [];
    
     for (let i = 0; i < list.length; i++) {
         if (!unicos.includes(list[i])){
             unicos.push(list[i]);
         }
        
     }
     return unicos;
   }

const resultado =removeDuplicates(duplicates);
console.log("Array sin duplicados:", resultado);
  