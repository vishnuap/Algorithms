// Chapter-1: Fundamentals
// Print and Count:
// Print all integer multiples of 5, from 512 to 4096. Afterward, log how many there were

var start = 515 //515 is the first multiple of 5 greater than 512
var end = 4095  //4095 is the last multiple of 5 less than 4096
var count = 0

for(let i = start; i <= end; i+=5){
    console.log(`The multiple of 5 is ${i}`)
    count++
}

console.log(`The number of multiples of 5 between 512 and 4096 is ${count}`)