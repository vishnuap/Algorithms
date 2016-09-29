// Chapter-2: Fundamentals-2
// Most-Significant-Digit
// Create a function which, given a number, returns the most significant digit of the number. The most significant digit is the left most, non-zero digit of the number. e.g., for 10340, most significant digit is 1. for 00.0403, most significant digit is 4

// Assume the argument passed is a non-zero number
function mostSignificant(num){
  var found = false,
      sigDig = 0,
      whole

  if (Math.floor(Math.abs(num)) == 0){
    while (!found){
      sigDig = Math.floor(Math.abs(num) * 10)
      console.log(`sigDig = ${sigDig}`);
      if (sigDig > 0){
        found = true
      } else {
        num = num * 10
      }
    }
  } else {
    whole = Math.floor(Math.abs(num))
    while (!found){
      if ((Math.floor(whole / 10) == 0) && (whole % 10 > 0)){
        sigDig = whole % 10
        found = true
      } else {
        whole = Math.floor(whole / 10)
      }
    }
  }
  return sigDig
}

var myNum = -1.09
console.log(`The most significant digit of ${myNum} is ${mostSignificant(myNum)}`)
