// Given a string, return whether all contained letters are in alphabetical order

// use the charCode of each alphabet to decide the alphabetical order

function alphaOrder(str){
  for (let i = 1, len = str.length; i < len; i++){
    if (str.charAt(i).toLowerCase().charCodeAt() < str.charAt(i-1).toLowerCase().charCodeAt()){
      return false
    }
  }

  return true
}

var myStr = 'facetiously'
myStr = 'effort'
myStr = 'abhors'
myStr = 'ghosty'
myStr = 'accent'
myStr = 'beefily'
myStr = 'billowy'
myStr = 'biopsy'
myStr = 'chintz'
myStr = 'almost'
myStr = 'access'
myStr = 'bijoux'
myStr = 'aegilops'
console.log(`All letters in "${myStr}" are in order - "${alphaOrder(myStr)}"`)
