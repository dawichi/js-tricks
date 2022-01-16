' use strict'

/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Trampolines
 *  |   La recursividad no está optimizada en JS, por lo que si llamamos varias veces
 *  |   a una función que se llama a sí misma también varias veces, podemos terminar
 *  |   con un error: 'Maximum call stack size exceeded'.
 *  |   
 *  |  Para solucionarlo, existen los trampolines, eliminando esa limitación. 
 *  |   A esto se le llama 'Tail call optimization' .
 *  |
 *  +---------------------------------------------------------------------------------+
**/

const suma = (number, sum = 0) => (
    number === 0 // sentencia
        ? sum // true
        : () => suma(number - 1, sum + number) // false
);


// ------------------------------------------------------------------------------------


// Este console.log devuelve el error mencionado
//const r = suma(10000);
//console.log(r);


// ------------------------------------------------------------------------------------

/*  Código de Trampoline: */
const trampoline = fn => (...args) => {
    let result = fn(...args)
    while (typeof result === 'function') {
        result = result()
    }
    return result
}


// Suma con trampolín
const tsuma = trampoline(suma);
const r = tsuma(1000000);
console.log(r);