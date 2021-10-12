/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola"*/

const RECORTANDO = (parametro, numeroCaracteresCortar) => {
    console.log(parametro.slice(0, numeroCaracteresCortar));
}

RECORTANDO('sebastian',5);