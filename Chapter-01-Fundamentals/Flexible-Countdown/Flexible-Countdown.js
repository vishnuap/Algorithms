// Chapter-1: Fundamentals
// Flexible-Countdown
// Based on countdown by 4, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum using a FOR.

function flex(low, high, mult){
  if((typeof low === 'number') && (typeof high === 'number') && (typeof mult === 'number') && mult){
    var highDiv = Math.floor(high / mult),
        lowDiv  = Math.floor(low / mult)
    for(let i = highDiv; i > lowDiv; i -= 1){
      console.log(`The number in the countdown is ${i * mult}`)
    }
  } else {
    console.log("Invalid parameters")
  }
}

flex(2, 9, 0)
