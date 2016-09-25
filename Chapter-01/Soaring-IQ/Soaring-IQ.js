// Chapter-1: Fundamentals
// Soaring-IQ
// Your time with us will definitely make you smarter! Let's say a new Dojo student, Bogdan, entered with a modest IQ of 101. How smart would Bogdan be at the end of the end of the bootcamp if his IQ rose by 0.01 on day-1, an additional 0.02 on day-2, up by an additional 0.03 on day-3 and so on all the way up to a 0.98 increase on his 98th day (last day of bootcamp).

// Approach-1: Use maths
// 0.01 + 0.02 + 0.03 + .... + 0.98
// => 1/100 + 2/100 + 3/100 + .... + 98/100
// => (1+2+3+...+98)/100
// => ((98 * 99)/2)/100  (sum of n integers = n * (n+1) / 2)
function iq1(){
  return 101 + (98 * 99)/200
}

// Approach-2: use a for loop to sum it all up
function iq2(){
  var iq = 101
  for(let i = 1; i <= 98; i++){
    iq += i/100
  }
  return iq
}

console.log(`Bogdan's IQ at the end = ${iq1()}`)
console.log(`Bogdan's IQ at the end = ${iq2()}`)
