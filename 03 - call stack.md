# JS CALL STACK

JavaScript is not async by default (while NodeJS yes it is)

So when we call a function which calls another function:

```js
function secondary(number) {
	return number + 1
}

function main() {
	const base_number = 5
	return secondary(base_number) 
}

main()
```

When main is called, the stack looks like

```
1. main()
0. global
```

so now we have our main() function task over the base `global` object in our call stack of JavaScript

and when the return is reached and calls the second function, is:

```
2. secondary()
1. main()
0. global
```

so now we have reached the biggest point for the stack in our program, so everything starts being resolved from the secondary function, passing the result to the main and then ending the program when returning the value in main
