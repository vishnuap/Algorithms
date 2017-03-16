// Write your own function to recreate the string.trim() function of javascript. Given str = "      I am Me     ", remove whitespace from both sides and return "I am Me"

// Using the charCode (9 = tab, 10 = newline, 13 = carriage return, 32 = space) to do this. First from the front, then from the back. Using the "substring" built-in function

// assumption: string is not empty

function trim(str){
  var i = 0
  // front
  while ((str.charCodeAt(i) == 9) || (str.charCodeAt(i) == 10) || (str.charCodeAt(i) == 13) || (str.charCodeAt(i) == 32)){
    i++
  }
  var temp = str.substring(i)
  i = temp.length-1

  while ((temp.charCodeAt(i) == 9) || (temp.charCodeAt(i) == 10) || (temp.charCodeAt(i) == 13) || (temp.charCodeAt(i) == 32)){
    i--
  }

  return temp.substring(0, i+1)
}

// To do it without the "substring" function, replace it with a for loop which reads from the start index to the end index used in the substring and concatenate the characters one by one to the result.

var myStr = "      I am Me     "
myStr = "    \n   I am Me   \t   "

console.log(`"${myStr}"`)
console.log(`"${trim(myStr)}"`)
