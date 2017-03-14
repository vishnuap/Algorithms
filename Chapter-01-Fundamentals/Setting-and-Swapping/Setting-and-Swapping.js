// Chapter-1: Fundamentals
// Setting and Swapping:
// Set "myNumber" to 42. Set "myName" to your name. Now swap "myNumber" into "myName" and vice-versa

var myNumber = 42
var myName = 'Vishnu'

console.log(`myNumber = ${myNumber} and myName = ${myName}`)

var temp = myNumber
myNumber = myName
myName = temp

console.log(`After Swapping:`)
console.log(`myNumber = ${myNumber} and myName = ${myName}`)