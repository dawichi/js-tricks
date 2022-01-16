const arr = [
	{ name: 'David', age: 16 },
	{ name: 'Antia', age: 20 },
	{ name: 'Carlos', age: 25 },
	{ name: 'Pedro', age: 32 },
]


/*  +---------------------------------------------------------------------------------+
 *  |   .forEach()
 *  |           
 *  |   Goes through every element of an array
 *  +---------------------------------------------------------------------------------+
 */
arr.forEach((element) => {
	// manage stuff here
	console.log(element)
})


/*  +---------------------------------------------------------------------------------+
 *  |   .map()
 *  |           
 *  |   Returns an array applying a function to each element
 *  +---------------------------------------------------------------------------------+
 */
// Add 2 year to everyone's age
const new_arr = arr.map((element) => {
	return {
		name: element.name,
		age: element.age + 2,
	}
})



/*  +---------------------------------------------------------------------------------+
 *  |   .filter()
 *  |           
 *  |   Filters an array with a function
 *  +---------------------------------------------------------------------------------+
 */
// Filter the array with people older than 22 years old
const filtered_arr = arr.filter((element) => element.age > 21)
