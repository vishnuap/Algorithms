// Given an object, write a function to convert the keys to values and values to keys. given {"name": "Zaphod", "charm": "high", "morals": "dicey"} return {"Zaphod": "name", "high": "charm", "dicey": "morals"}

function invert(hash){
  var result = {}

  for (key in hash){
    result[hash[key]] = key
  }

  return result
}

var myHash = {"name": "Zaphod", "charm": "high", "morals": "dicey"}
console.log(invert(myHash))
