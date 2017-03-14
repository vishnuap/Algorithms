// Chapter-2: Fundamentals-2
// Twelve-Bar-Blues
// Write a function that prints the number 1, then "chick", then "boom", then "chick". Then print 2 followed by "chick", then "boom", then "chick". Continue the same cycle for each number up to 12

function twelveBarBlues(){
  for (let i = 1; i <= 12; i++){
    console.log(`${i}`)
    console.log("chick")
    console.log("boom")
    console.log("chick")
  }
}

twelveBarBlues()
