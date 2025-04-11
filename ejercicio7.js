function greaterNumber (numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        console.log("Este es el número más grande:", numberOne);
        
    } else if (numberTwo > numberOne){
        console.log("Este es el número más grande:", numberTwo);
    } else{
        console.log("Ambos números son iguales:", numberOne);
        
    }
}

greaterNumber(10, 10);