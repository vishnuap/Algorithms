// Create a function that, given a string, returns the integer made from the strin's digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function would return 1357924680

function getNumber(str){
  var result = ''

  for (let i = 0; i < str.length; i++){
    if (!isNaN(Number(str[i]))){
      result += str[i]
    }
  }

  return Number(result)
}

myStr = "0s1a3y5w7h9a2t4?6!8?0"
console.log(`Original String is ${myStr}`)
console.log(`The number in the string is ${getNumber(myStr)}`)