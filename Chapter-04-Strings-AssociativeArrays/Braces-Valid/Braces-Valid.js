// Given a sequence of parentheses, braces and brackets, determine whether it is valid. e.g., "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]" => true; "D(i{a}l[ t]o)n{e" => false; "A(1)s[O(n]0{t) 0}k" => false

function braceValid(str){
  const matchOpenBrace = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  const openBraces = ['(', '{', '[']
  const closeBraces = [')', '}', ']']

  var lastOpenBrace = []

  for (let i = 0, len = str.length; i < len; i++){
    switch (true){
      case (openBraces.indexOf(str.charAt(i)) > -1):
        lastOpenBrace.push(str.charAt(i))
        break
      case (closeBraces.indexOf(str.charAt(i)) > -1):
        if (matchOpenBrace[str.charAt(i)] != lastOpenBrace.pop()){
          return false
        }
    }
    // console.log(lastOpenBrace)
  }

  if (lastOpenBrace.length == 0){
    return true
  } else {
    return false
  }
}

var braceStr = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]"
braceStr = "D(i{a}l[ t]o)n{e"
braceStr = "A(1)s[O(n]0{t) 0}k"
console.log(`The string is "${braceStr}" and braceValid is "${braceValid(braceStr)}"`)
