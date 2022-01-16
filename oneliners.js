/*
	13 awesome JS oneliners!
*/

// 1. get a random boolean [ true / false ]
const randomBoolean = () => Math.random() >= 0.5
randomBoolean() // 50/50 chance on returning true or false



// 2. check if a provided day is a weekday
const isWeekday = date => date.getDay() % 6 !== 0
isWeekday(new Date(2021, 0, 11)) // true (Monday)
isWeekday(new Date(2021, 0, 10)) // false (Sunday)



// 3. Reverse a string
const reverse = str => str.split('').reverse().join('')
reverse('hello world') // 'dlrow olleh'



// 4. check if the current tab is in view / focus
const isBrowserTabInView = () => document.hidden
isBrowserTabInView() // true or false, depending on if tab is in view / focus



// 5. check if a number is even or odd
const isEven = num => num % 2 === 0;
isEven(2) // true
isEven(3) // false



// 6. Get the time from a date
const timeFromDate = date => date.toTimeString().slice(0,8)
timeFromDate(new Date(2021, 0, 10, 17, 30, 0)) // "17:30:00"
timeFromDate(new Date()) // current time



// 7. Truncate a number to a fixed decimal point
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)
toFixed(25.19872, 1) // 25.1
toFixed(25.19872, 2) // 25.19
toFixed(25.19872, 3) // 25.198
toFixed(25.19872, 4) // 25.1987



// 8. Check if an element is currently in focus
const elementIsInFocus = el => el === document.activeElement




// 9. Check if the current user has touch events supported
const touchSupported = () => 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch
// true if touch events are supported



// 10. Check if the current user is an Apple device
const isApple = /Mac|iPod|iPhone|iPad/.test(navigator.platform)



// 11. Scroll to top
const goToTop = () => window.scrollTo(0, 0)



// 12. Get average value of numbers
const average = (...args) => args.reduce((a, b) => a + b) / args.length
average(1, 2, 3, 4) // 2.5



// 13. Convert Fahrenheit / Celsius
const celsiusToFahrenheit = celsius => celsius * 9/5 + 32
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9