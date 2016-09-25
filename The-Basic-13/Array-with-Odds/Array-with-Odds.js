// The Basic 13
// Array-with-Odds
// Create an array with all odd integers between 1 and 255 inclusive

function makeArr(){
  var arr = []
  for(let i = 1; i <= 255; i += 2){
    arr.push(i)
  }

  console.log(arr)
}

makeArr()
