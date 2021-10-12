/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const miFuncion = (cadena, numeroVeces) => {
    for (let i = 0; i < numeroVeces; i++) {
        console.log(cadena); 
    }
}
miFuncion('hola',5);