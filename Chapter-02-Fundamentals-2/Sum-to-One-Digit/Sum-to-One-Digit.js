// Chapter-2: Fundamentals-2
// Sum-to-One-Digit
// Kaitlin sees beauty in numbers but also believes that less is more. Implement sumToOne(num) that sums a given integer's digits repeatedly until the sum is only one digit. Return that one-digit result. e.g., sumToOne(928) returns 1 => 9+2+8 = 19 => 1+9 = 10 => 1+0 = 1

// Assume the argument is a non-zero positive integer
// Approach-1: loop and modulo
function sumToOne(num){
  var sum = 0,
      done = false

  while (!done){
    while(num > 0){
      sum += num % 10
      num = Math.floor(num / 10)
    }
    if (sum % 10 == sum){
      done = true
    } else {
      num = sum
      sum = 0
    }
  }

  return sum
}

// Approach-2: String and Number conversion
function sumToOne2(num){
  var sum = 0,
      done = false
  while (!done){
    for(let i = 0; i < String(num).length; i++){
      sum += Number(String(num)[i])
    }

    if (String(sum).length > 1){
      num = sum
      sum = 0
    } else {
      done = true
    }
  }
  return sum
}

// Approach-3: Recursion
function sumToOne3(num){
  if (num % 10 == num){
    return num
  } else {
    var sum = 0
    while(num > 0){
      sum += num % 10
      num = Math.floor(num / 10)
    }
    return sumToOne3(sum)
  }
}

var myNum = 928
console.log(`The original number  = ${myNum}`)
console.log(`The sumToOne(${myNum}) = ${sumToOne(myNum)}`)
console.log(`The sumToOne2(${myNum}) = ${sumToOne2(myNum)}`)
console.log(`The sumToOne3(${myNum}) = ${sumToOne3(myNum)}`)
