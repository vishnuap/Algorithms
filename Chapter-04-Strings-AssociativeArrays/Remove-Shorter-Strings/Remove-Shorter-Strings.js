// Given a string array and a value, remove any strings shorter than value from the array

function removeShortString(str, len){
  for (let i = 0; i < str.length; i++){
    if (len > str[i].length){
      str.splice(i, 1)
      i--
    }
  }
}

var myStr = ['this', 'is', 'a', 'string', 'array'],
    len   = 3

console.log(`The string array is '${myStr}'`)
console.log(`The given length is '${len}'`)
removeShortString(myStr, len)
console.log(`The string array after removing shorter strings is '${myStr}'`)
