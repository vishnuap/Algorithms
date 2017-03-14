// For this, we will look not only at the entire string provided but also at the substrings within it. Return the longest palindromic substring. Given "what up, daddy-o?", return "dad". Given "Yikes! my favorite racecar erupted!" return "e racecar e". Strings which are not complete meaningful words are ok.
// Do this first using strict rules.
// Do this next ignoring everything except the alphabet

// Assumption: Ignore single letters/characters

// I will be using the functions developed in the previous assignment - Palindrome - here

// Strict
function strictPalindrome(str){
  var len = str.length

  for (let i = 0, j = len-1; i < Math.floor(len/2); i++, j--){
    if (str.charAt(i) != str.charAt(j)){
      return false
    }
  }

  return true
}

// Ignore everything except alphabets
function palindrome(str){
  var i = 0, j = str.length-1

  while (i < j){
    let front = str.charAt(i).toLowerCase().charCodeAt()
    while (((front < 97) || (front > 122)) && (i < j)){
      i++
      front = str.charAt(i).toLowerCase().charCodeAt()
    }

    let back  = str.charAt(j).toLowerCase().charCodeAt()
    while (((back < 97) || (back > 122)) && ( i < j)){
      j--
      back = str.charAt(j).toLowerCase().charCodeAt()
    }

    if (front != back){
      return false
    } else {
      i++
      j--
    }
  }

  return true
}

var myStr = "what up, daddy-o?"
// myStr = "uh.. not much"
// myStr = "Yikes! my favorite racecar erupted!"
// myStr = "Hot pureE eruption!"
var palinStr = ''
var palinStrLen = 0

console.log("STRICT")
for (let i = 0, len = myStr.length; i < len; i++){
  for (let j = i+2; j <= len; j++){
    if (strictPalindrome(myStr.substring(i,j)) && (myStr.substring(i,j).length > palinStrLen)){
      palinStrLen = myStr.substring(i,j).length
      palinStr = myStr.substring(i,j)
    }
  }
}

if (palinStrLen){
  console.log(`The longest palindromic substring in '${myStr}' is "${palinStr}"`)
  console.log(`The length is ${palinStrLen}`)
} else {
  console.log(`The string '${myStr}' doesn't have any palindromic substring`)
}
console.log("---------------------")

console.log("Not STRICT")
palinStr = ''
palinStrLen = 0

for (let i = 0, len = myStr.length; i < len; i++){
  for (let j = i+2; j <= len; j++){
    if (palindrome(myStr.substring(i,j)) && (myStr.substring(i,j).length > palinStrLen)){
      palinStrLen = myStr.substring(i,j).length
      palinStr = myStr.substring(i,j)
    }
  }
}

if (palinStrLen){
  console.log(`The longest palindromic substring in '${myStr}' is "${palinStr}"`)
  console.log(`The length is ${palinStrLen}`)
} else {
  console.log(`The string '${myStr}' doesn't have any palindromic substring`)
}
