const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, nameToFind) {
    const index = nameList.indexOf(nameToFind);

    if (index !== -1) {
        console.log(`✅ El nombre "${nameToFind}" existe en la posición ${index}`);
        return true;
        } else {
            console.log(`❌ El nombre "${nameToFind}" no existe en la lista`);
            return false;

        }
  }

  nameFinder(names, 'Ricardo');
  nameFinder(names, 'Tony');