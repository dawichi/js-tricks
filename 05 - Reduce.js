' use strict'

/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Reducer - .reduce()
 *  |  
 *  |       reducer = (acumulador, valorActual) => nuevoAcumulador
 *  |   
 *  |       
 *  |   Filtrar arrays con funciones callback
 *  |   Genera un array de la misma longitud que el inicial,
 *  |   pero con los elementos modificados según la función callback
 *  |   
 *  +---------------------------------------------------------------------------------+
**/

/*  .reduce(%1, %2)
 *  %1: función callback reducer
 *  $2: valor inicial del acumulador
 * 
 *  En el siguiente ejemplo con un array vacío, el resultado se queda en 0
**/
const reducido = [].reduce((acc, el) => acc + el, 0);


// Const arrays
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mascotas = [
    { nombre: 'Puchini', edad: 12, especie: 'perro' },
    { nombre: 'Chanchito', edad: 3, especie: 'perro' },
    { nombre: 'Pulga', edad: 10, especie: 'perro' },
    { nombre: 'Pelusa', edad: 16, especie: 'gato' },
];


// ------------------------------------------------------------------------------------

// *NOTA: Forma más óptima de sumar los elementos de un array de números
const resultado = numeros.reduce((acc, el) => acc + el, 0);


/*  En un array muy grande (1k, 1m elementos) para encontrar uno, se utiliza .find()
 *  En un for de otro array donde se llame a un .find() en el array grande, se generan tantas búsquedas largas
 *  que se destruye el rendimiento de la app. Para evitarlo, se indexan. Ej: con el array de mascotas 
**/
//const indexed = mascotas.reduce((acc, el) => ({}), {});
const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {});

console.log(indexed);
/*  Resultado - console.log(indexed);
 *
 *  Chanchito: {nombre: "Chanchito", edad: 3, especie: "perro"}
 *  Pelusa: {nombre: "Pelusa", edad: 16, especie: "gato"}
 *  Puchini: {nombre: "Puchini", edad: 12, especie: "perro"}
 *  Pulga: {nombre: "Pulga", edad: 10, especie: "perro"}
 *
 *  Se obtiene el array con los objetos pero indexados por el nombre
 *  de forma que para realizar búsquedas más rápidas, ahora podremos
 *  buscar por nombre, sin recorrer el resto del objeto
**/


// ------------------------------------------------------------------------------------

const anidado = [1, [2, 3], 4, [5]];

// Partiendo del array anterior, obtener: = [1, 2, 3, 4, 5]
const plano = anidado.reduce((acc, el) => acc.concat(el), []);
console.log(plano);
// Explicación: Comenzando con 'acc = []' (array vacío), se le van concatenando los elementos del array (el)
