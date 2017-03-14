// Create a function that, given an input string 'str', returns a boolean whether parentheses in 'str' are valid. Valid sets of parentnteses always open before they close. e.g., 'Y(3(p)p(3)r)s' returns "True". 'N(0(p)3' returns "False" since not all parentheses are closed. 'N(0)t )0(k' returns "False" since4 it has an extra closing parentheses

function parenValid(str){
  var parenCount = 0

  for (let i = 0; i< str.length; i++){
    switch (true){
      case (str[i] == '('):
        parenCount++
        break
      case (str[i] == ')'):
        parenCount--
        break
    }
    if (parenCount < 0){
      return false
    }
  }

  if (parenCount == 0){
    return true
  } else {
    return false
  }
}

var parenStr = 'Y(3(p)p(3)r)s'
// parenStr = 'N(0(p)3'
parenStr = 'N(0)t )0(k'
console.log(`The string is "${parenStr}" and parenValid is "${parenValid(parenStr)}"`)
