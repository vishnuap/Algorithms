// The Basic 13
// Print-Ints-and-Sum-0-255
// Print integers from 0 to 255. With each integer print the sum so far

function printIntsSum(){
  var sum = 0
  for(let i = 0; i <= 255; i++){
    sum += i
    console.log(`${i} - Sum so far = ${sum}`)
  }
}

printIntsSum()
