// Implement reverseString(), given stringm returns the string with the characters in reverse order. Given "creature" return "erutaerc". Do not use built-in functions

function reverseString(str){
  var result = ''
  for (let i = str.length - 1; i >= 0; i--){
    result += str[i]
  }

  return result
}

var myStr = "creature this big"
console.log(`The original string is '${myStr}'`)
console.log(`The reversed string is '${reverseString(myStr)}'`)
