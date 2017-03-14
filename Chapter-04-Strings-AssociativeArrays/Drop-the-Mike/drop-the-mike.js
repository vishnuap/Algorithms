// Create a function that accepts an input string, removes leading and trailing white spaces (at beginning and ending only), capitalizes the first letter of every word and returns the string. If original string contains the word Mike anywhere, immediately return "stunned silence" instead. Given "   tomorrow never dies  ", return "Tomorrow Never Dies". Given " Watch Mike and Mike ", return "stunned silence"

// making use of string methods here.
// toLowerCase() - converts all chars to lower case
// indexOf() - provides the starting position of the string being searched. If not found, returns -1
// trim() - removes leading and trailing whitespaces
// split(symbol) - splits the string into an array of strings demarcated by 'symbol'
// map(anon function) - is an array method which passes every element of the array to the anaon function and returns another array with the function results
// charAt(position) - string method to obtain specific character of the string at the specified position. Same result as string[position]
// substring(index) - returns the substring starting from the specified index
// reduce(anon function) - array method which passes each value of the array to the anon function. Returns a singleton result after acting on the array
function dropIt(str){
  // convert everything to lowercase and search for word 'mike'.
  if (str.toLowerCase().indexOf('mike') > -1){
    return "stunned silence"
  } else {
    // if 'mike' is not found, use trim() to remove leading and trailing spaces, split() to get word array, map() to capitalize all words and reduce() to combine word array into string
    return str.trim().split(' ').map(function(word){return word.charAt(0).toUpperCase()+word.substring(1).toLowerCase()}).reduce(function(x,y){return x+' '+y})
  }
}

var myStr = "   tomorrow never dies   "
myStr = "mike and Mike"
console.log(dropIt(myStr))
