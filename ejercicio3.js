/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

const miFuncion = (cadena, separador) => {
    const miArreglo = cadena.split(separador);
    console.log(miArreglo);
}

miFuncion('hola que mas', ' ');