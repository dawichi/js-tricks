' use strict'

/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Recursividad - Función que se llama a sí misma todo el rato
 *  |   hasta que se cumpla la condición de salida
 *  |  
 *  |   
 *  |   Equivale a la función que relizaría un for o un while.
 *  |   De esta forma se ahorra utilizar control de flujo y
 *  |   permite escribir código declarativo.
 *  |   Además de evitar errores y mal código por iterar for dentro de un for y etc.   
 *  |
 *  +---------------------------------------------------------------------------------+
**/

const conteoRegresivo = (a) => {
    if(a < 0) return;
    console.log(a);
    return conteoRegresivo(a - 1);
};

conteoRegresivo(10);


// ------------------------------------------------------------------------------------

/* Caso de la vida real - Explicación:

Axios: Es una librería que permite acceder a urls y extraer datos con GET
llamarApi: se le pasa una URL y una variable 'llamados' que por defecto vale 0
    try: si consigue acceder a los datos de la URL, return(result)
    catch: si falla, comprueba si ya se han hecho más de 5 llamadas (6º).
           si es así, devuelve texto vacío. (Podría añadirse un mensaje de error de conexión a la BD)
        Pero si aún no van 5 intentos, vuelve a llamar a la API con la misma url pero con la variable
        de llamadas incrementada en 1.


Resultado: un código que realiza hasta 5 intentos máximos de conexión a una API
*/

const axios = require('axios');

const llamarApi = async (url, llamados = 0) => {
    try {
        const {data} = await axios.get(url);
        console.log(data);
        return data;
    } catch (e) {
        if (llamados > 5) { return ''; }
        console.log(e);
        return llamarApi(url, llamados + 1);
    }
}

llamarApi('https://jsonplaceholder.typecode.com/users');