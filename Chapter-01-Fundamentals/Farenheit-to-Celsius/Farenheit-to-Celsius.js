// Chapter-1: Fundamentals
// Farenheit-to-Celsius
// Kelvin wants to convert between temperature scales. Create farenheitToCelsius(fDegrees) that accepts a number of degrees in Farenheit and returns the equivalent temperature as expressed in Celsius degrees.
// Fahrenheit = (9/5 * Celsius) + 32
// Celsius = (Fahrenheit - 32) * 5/9

// Assuming fDegrees is a number
function farenheitToCelsius(fDegrees){
  var celsius = (fDegrees - 32) * 5/9
  return celsius
}

var fD = 105
console.log(`${fD} degrees farenheit = ${farenheitToCelsius(fD)} degrees celsius`)

module.exports = farenheitToCelsius
