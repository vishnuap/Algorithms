// Given a string containing a Roman numeral representation of a positive integer, return the integer. Remember that III is 3, DCIX is 609 and MCDXCII is 1492

// The Roman numbering is as follows: In this representation, I = 1; V = 5; X = 10; L = 50; C = 100; D = 500; M = 1000; 4 = IV; 9 = IX; 40 = XL; 90 = XC; 400 = CD; 900 = CM

// 1. start reading the given roman number from left to right
// 2. Read till a character changes. Count the nujmber of charecters read before it changes. for e.g., in MMCDII, start with the first M and read both M's. Count will be 2
// 3. Find the corresponding int value of the roman numeral and multiply it with the number of occurances and add this value to the result INT
// 4. Continue steps 1,2,3 till end of the roman numeral.
// 5. While reading left to right if the change in character is of a higher value than the current character (e.g., XC or XL) treat them as a single value. The int value is calculated by subtracting the lower value (X=10) from the higher value (C = 100 or L = 50; so XC = 100-10=90). Add this to the result INT

function r2i(roman){
  const integer = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }

  var result = 0

  var count = 0
  var prev = ''

  for (let i = 0; i < roman.length; i++){
    if (prev){
      if (prev == roman[i]){
        count++
      } else {
        if (integer[roman[i]] > integer[prev]){
          result += integer[roman[i]] - integer[prev]
          prev = ''
          count = 0
        } else {
          result += integer[prev] * count
          prev = roman[i]
          count = 1
        }
      }
    } else {
      prev = roman[i]
      count++
    }
  }

  if (prev){
    result += integer[prev] * count
  }

  return result
}

var roNum = 'MXDII'
console.log(`The Roman Numral is ${roNum} and the Integer value is ${r2i(roNum)}`)
