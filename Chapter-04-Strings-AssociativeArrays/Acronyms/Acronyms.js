// Create a function that, given a string, returns the string's acronym (first letters only, capitalized). Given " there's no free lunch - gotta pay yer way ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN"

// use the split command here

function acronym(str){
  var temp = str.split(' '),
      result = ''

  for (let i = 0; i < temp.length; i++){
    if (temp[i]){
      result += temp[i][0].toUpperCase()
    }
  }

  return result
}

var myStr = " there's no free lunch - gotta pay yer way "
var myStr2 = "Live from New York, it's Saturday Night!"
console.log(`The original string is ${myStr2}`)
console.log(`The acronym is ${acronym(myStr2)}`)