# HOISTING

A strinct definition is that declare variables and functions are moved to the beggining of the file

It moves the variables first and functions after


## Example

When you write 

```js
console.log(name);

lastname();

var name = "David";

function name() { console.log("Fajardo") }
```

This is interpreted to

```js
var name = undefined;

function name() { console.log("Fajardo") }

console.log(name);

lastname();

name = "David";
```




## Variables goes first 

It doesn't matter the order you declare both, the function will be the last one executed because of hoisting

```js
var name;
function name(){}

typeof name // Output: "function"
```

```js
function name(){}
var name;

typeof name // Output: "function"
```



## Variables initialized

But, if you declare a value for the var....


```js
var name = "David";
function name(){}

typeof name // Output: "string"
```

This is because JavaScript makes hoisting with the declaration of the var and executes a separation in 2 statements

```js
var name = "David";

// after hoisting is:

var name = undefined;
name = "David";
```

And because of that, when you have the function declared also, it behaves like:

```js
var name = undefined;
function name(){}
name = "David";

typeof name // Output: "string"
```