// Write your own function to recreate the string.concat() function of javascript. Given str1, str2, str3 ... strn return a single concatenated string 'str1str2str3...strn'.

// i am using a "reduce" function on the array of strings. We can do this with a regular for loop as well.

function concat(str1, arrStr){
  // str1 is the main string
  // arrStr is the array of additional strings to be concatenated
  return arrStr.reduce(function(main, secondary){ return main + secondary }, str1)
}

var myStr = 'string1'
var myArr = ['string2', 'string3', 'string4', 'string5']

console.log(concat(myStr, myArr))
