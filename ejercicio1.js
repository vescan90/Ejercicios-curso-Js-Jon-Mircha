/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/ 

const NUMERO_CARACTERES = (cadena) => {
    if (typeof cadena !== 'string') {
        console.log('El tipo de dato a evaluar debe ser un string de lo con trario no podremos dar el número de caracteres')
    } else {
        console.log(cadena.length);
    }
    
}
NUMERO_CARACTERES('hola');

