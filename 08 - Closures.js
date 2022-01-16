' use strict'

/*  +---------------------------------------------------------------------------------+
 *  |   
 *  |   Closures
 *  |   
 *  |   
 *  |
 *  +---------------------------------------------------------------------------------+
**/

const x = 'Fluffy'
const f = () => {
    const y = 'Kity'
    console.log(x, y)
}

// Funciona porque tiene acceso tanto a la constante 'y' interna de la función
// como a la constante 'x' externa a la función.
f()


// ------------------------------------------------------------------------------------

import 'isomorphic-fetch'

const crudder = dominio => recurso => {
	const url = `${dominio}/${recurso}`

	return ({
		create: (x) => fetch(url, {
			method: 'POST',
			body: JSON.stringify(x),
		}).then(x => x.json()),
		get: () => fetch(url).then(x => x.json())
	})
}

const Base = crudder('https://jsonplaceholder.typicode.com')
const Todos = Base('todos')
const Users = Base('users')

Todos.get().then(x => console.log(x[0]))
Users.get().then(x => console.log(x[0]))