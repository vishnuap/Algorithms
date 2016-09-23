// Capter-1: Fundamentals
// Celsius-to-Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius and returns the equivalent temperature in Fahrenheit degrees
// Fahrenheit = (9/5 * Celsius) + 32

function celsiusToFahrenheit(cDegrees){
  var fahrenheit = (9/5 * cDegrees) + 32
  return fahrenheit
}

var cD = 40
console.log(`${cD} degrees celsius = ${celsiusToFahrenheit(cD)} degrees fahrenheit`)

module.exports = celsiusToFahrenheit
