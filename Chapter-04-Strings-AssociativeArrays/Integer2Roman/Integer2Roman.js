// Given a positive integer, return a string containing that value represented in roman numerals.In this representation, I = 1; V = 5; X = 10; L = 50; C = 100; D = 500; M = 1000; 4 = IV; 9 = IX; 40 = XL; 90 = XC; 400 = CD; 900 = CM

// Conversion of integers to romans will have to start by seperating the big, rounded integers, converting them to roman and just adding the strings together. for e.g., 4397 = 4000 + 300 + 90 + 7 which traslates to 'MMMM' + 'CCC' + 'XC' + 'VII' = 'MMMMCCCXCVII'

function i2r(numInt){
  const roman = {
    1000: 'M',
    500 : 'D',
    100 : 'C',
    50  : 'L',
    10  : 'X',
    5   : 'V',
    1   : 'I'
  }

  var ul = 0, ll = 0

  var numArr = [], numArrIdx = 0

  var result = ''

  // convert the number into an array
  while(numInt > 0){
    numArr.push(numInt % 10)
    numInt = Math.floor(numInt / 10)
  }

  // each index in the array corresponds to the location of the digit in the number. index = 0 => 10^0; index = 1 => 10^1 etc
  // start processing this array from the end
  numArrIdx = numArr.length - 1

  // steps:from array
  // 0. read the next element 'e'
  // 1. 'num' = e * 10^i (where 'i' is the array index)
  // 2. check if 'num' is in the 'roman' object we declared
  // 3. if 2 is true, add the corresponding roman letter to the result string; go back to step 0
  // 4. if 2 is false, continue
  // 5. find the range between which 'num' falls in the 'roman' object
  // 6. find if the difference between 'num' and the upperlimit of the range is present in the 'roman' array
  // 7. if 6 is true, then prepend the roman value of the difference to the roman value of the upper limit and add this string to the result string; go back to step 0
  // 8. if 6 is false, continue
  // 9. find difference between 'num' and lower limit
  // 10. divide the difference from 9 by 10^i (used in step 1)
  // 11. append the roman value of the lowerlimit with the roman value of 10^i as many times as the result from 10 and add this string to the result string; go back to step 0
  for (let i = numArrIdx; i >= 0; i--){
    let mul = Math.pow(10, i)
    let num = mul * numArr[i]

    if (num in roman){
      result += roman[num]
    } else {
      switch (true){
        case (num > 1000):
          ll = 1000
          ul = 0
          break
        case ((num < 1000) && (num > 500)):
          ll = 500
          ul = 1000
          break
        case ((num < 500) && (num > 100)):
          ul = 500
          ll = 100
          break
        case ((num < 100) && (num > 50)):
          ll = 50
          ul = 100
          break
        case ((num < 50) && (num > 10)):
          ul = 50
          ll = 10
          break
        case ((num < 10) && (num > 5)):
          ll = 5
          ul = 10
          break
        case ((num < 5) && (num > 1)):
          ll = 1
          ul = 5
          break
        default:
          ll = 0
          ul = 0
      }

      if (ll || ul){
        if ((ul - num) in roman){
          result += roman[ul - num] + roman[ul]
        } else {
          result += roman[ll] + getLL(roman, num-ll, mul)
        }
      }

    }
  }

  return result
}

function getLL(r, n, l){
  var multiple = n / l
  var retVal = ''

  for (let i = 1; i <= multiple; i++){
    retVal += r[l]
  }

  return retVal
}

var int = 90
console.log(`Integer is ${int}`)
console.log(`${int} in Roman is ${i2r(int)}`)
