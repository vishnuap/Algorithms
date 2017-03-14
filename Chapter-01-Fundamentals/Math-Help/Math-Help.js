// Chapter-1: Fundamentals
// Math-Help
// Cartman doesn't really like math class and needs help. You are given two numbers - the co-efficients M and B in the equation Y = MX + B. Build a function that returns the X-intercept

// X-intercept is where Y = 0. So
// 0 = MX + B
// => X = -B/M
// So given M and B, X = (-1 * B)/M

// Assume the arguments passed to the function are both numbers and m != 0
function math(m, b){
  return (-1 * b)/m
}

var m = 3, b = 2
console.log(`The X-intercept for Y=MX+B where M = ${m} and B = ${b} is ${math(m, b)}`)
