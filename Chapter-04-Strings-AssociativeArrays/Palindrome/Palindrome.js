// Create a function to return a boolean whether the string is a strict palindrome. Strict palindrome is where you dont ignore spaces, punctuation, capitalization etc. "a x a" and  "racecar" return true. "Dud" and "oho!" return false

function strictPalindrome(str){
  var len = str.length

  for (let i = 0, j = len-1; i < Math.floor(len/2); i++, j--){
    if (str.charAt(i) != str.charAt(j)){
      return false
    }
  }

  return true
}

// Create a function to return a boolean whether the string is a palindrome. ignore spaces, punctuation, capitalization etc. "a x a" and  "ax a" and "axa" are all treated the same

// ignoring the unnecessary characters can be done using regex. I am choosing to do it using the char code of the alphabet: a-z => 97 - 122
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

var myStr = "dUd"
myStr = "a x a"
myStr = "Oho!"
myStr = "Able was I, ere I saw Elba"
myStr = "Madam I'm Adam"
console.log(`The string is '${myStr}' and strictPalindrome is '${strictPalindrome(myStr)}'`)
console.log(`The string is '${myStr}' and palindrome is '${palindrome(myStr)}'`)
