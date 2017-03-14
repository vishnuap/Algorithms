// Write a function that accepts a string parameter which is someone's name. Return the following: Strip the first letter of the string, Capitalize the first letter of the remaining string and return "[new word with Capitalized first lettet] to the [first letter]". e.g., Given Dylan, return "Ylan to the D!"

function jiggy(str){
  return `${str.charAt(1).toUpperCase()}${str.toLowerCase().substring(2)} to the ${str.charAt(0).toUpperCase()}!`
}

var myStr = 'deVon'
console.log(`The name is "${myStr}". "${jiggy(myStr)}"`)
