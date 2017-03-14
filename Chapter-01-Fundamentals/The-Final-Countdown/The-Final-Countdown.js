// Chapter-1: Fundamentals
// The-Final-Countdown
// Based on "Flexible Countdown". Given 4 parameters - param1, param2, param3, param4 - print multiples of param1, starting at param2 and extending till param3. If a multiple is equal to param4, exclude it from the result. Do using a WHILE loop

function final(mult, low, high, excl){
  if((typeof mult === 'number') && (typeof low === 'number') && (typeof high === 'number') && (typeof excl === 'number') && mult){
    var lowDiv = Math.floor(low / mult) + 1,
        highDiv = Math.floor(high / mult),
        counter = lowDiv

    while (counter <= highDiv){
      if ((counter * mult) != excl){
        console.log(`The countdown number is ${counter * mult}`);
      }
      counter++
    }
  } else {
    console.log("Invalid Paramaeters")
  }
}

final(3, 5, 17, 9)
