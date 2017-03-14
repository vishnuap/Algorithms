// Create a function that given a string, returns all of the string's contents but without blanks. If given the string "Pl ayTh atF unkyMu sic", return "PlayThatFunkyMusic"

// Since strings are immutable, we cannot do this in-place. Hence the function will return a new string.
// 1. One way of doing this is using regular for loop and going through the string validating each character. (Reduce function cannot be used here!!)
// 2. Another way to do it is using the split and join string functions

function removeBlank1(str){
  var result = ''
  for (let i = 0; i < str.length; i++){
    if (str[i] != ' '){
      result += str[i]
    }
  }

  return result
}

function removeBlank2(str){
  var temp = str.split(' '),
      result = temp.join('')
  
  return result
}

var myStr = "  P l  ayTh atF unkyMu sic"
console.log(`Original string is - '${myStr}'`)
console.log(`Changed string is - '${removeBlank1(myStr)}'`)
console.log(`Changed string is - '${removeBlank2(myStr)}'`)