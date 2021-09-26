/*
	Calculator made with object literals

	You pass the method (add, substract, etc) as a param 
*/
function calculate(num1, num2, action) {
	const actions = {
		add: (a, b) => a + b,
		subtract: (a, b) => a - b,
		multiply: (a, b) => a * b,
		divide: (a, b) => a / b,
	}

	return actions[action]?.(num1, num2) ?? "Calculation method not allowed"
}

calculate(8,2)           // Calulation method not allowed
calculate(8,2,'add')     // 10
calculate(8,2,'divide')  // 4





/*
	Translations: use object literals as translator index

	In a real web, we had the need of make a index of "translatable" words,
	returning the word it it was not considered in our index
*/
function translate(lang, word) {
	// If the lang param is not allowed, returns word
	const langs = ['es', 'de']
	if(langs.indexOf(lang) == -1)
		return word

	const translates = {
		es: {
			Apple: 'Manzana',
			Keyboard: 'Teclado',
			Browser: 'Navegador'
		},
		de: {
			Apple: 'Apfel',
			Keyboard: 'Klaviatur',
			Browser: 'Browser'
		}
	}

	return translates[lang][word] ?? word
}

// Returns the translated
translate('es', 'Apple')     // Manzana ✓
translate('de', 'Keyboard')  // Klaviatur ✓

translate('pt', 'Browser')   // not found 'pt', returns word
translate('es', 'Other') // not found 'Other' inside 'es', returns word