// Chapter-1: Fundamentals
// Celsius-equals-Fahrenheit (Optional)
// Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200 going downward, checking whether it is equal to the corresponding Fahrenheit value.

// The brute force way:
function celsiusToFahrenheit(cDegrees){
  var fahrenheit = (9/5 * cDegrees) + 32
  return fahrenheit
}

function farenheitToCelsius(fDegrees){
  var celsius = (fDegrees - 32) * 5/9
  return celsius
}

var num = 200,
    c2f = celsiusToFahrenheit(num),
    f2c = farenheitToCelsius(num)

while (c2f != f2c){
  num--
  c2f = celsiusToFahrenheit(num)
  f2c = farenheitToCelsius(num)
}

console.log(`The temperature where F and C are equal is ${c2f}`)

// Mathematical way:
// If C and F are equal, let it be denoted by 'x'. Based on the formula, we know that
//    x = (9/5 * x) + 32
// => x = (9x + 32*5)/5
// => 5x = 9x + 160
// => -4x = 160
// => x = 160/-4 = -40
// So the number where Fahrenheit = Celsius is -40 Degrees
