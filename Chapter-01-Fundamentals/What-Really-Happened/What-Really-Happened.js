// Chapter-1: Fundamentals
// What-really-Happened
// (refer to Poor Kenny for background)
// Kyle notes that the chance of one disaster is totally unrelated to the chance of another. Change whatHappensToday() to whatReallyHappensToday(). In this new function test for each disaster independantly instead of assuming exactly one disaster will happen. In other words, in this new function, all five might occur today or none. Maybe kenny will survive!!

// Assume the probabilities of disasters from the Poor-Kenny question
// 10% chance of volcano, 15% chance of tsunami, 20% chance of earthquake, 25% chance of blizzard and 30% chance of meteor strike
function whatReallyHappensToday(){
  var rVol = Math.floor(Math.random() * 20),
      rTsu = Math.floor(Math.random() * 20),
      rEqu = Math.floor(Math.random() * 20),
      rBli = Math.floor(Math.random() * 20),
      rMet = Math.floor(Math.random() * 20),
      none = 1

  if (rVol >= 0 && rVol <= 1){ console.log(`Volcano`); none = 0 }
  if (rTsu >= 0 && rTsu <= 2){ console.log(`Tsunami`); none = 0 }
  if (rEqu >= 0 && rEqu <= 3){ console.log(`Earthquake`); none = 0 }
  if (rBli >= 0 && rBli <= 4){ console.log(`Blizzard`); none = 0 }
  if (rMet >= 0 && rMet <= 5){ console.log(`Meteor Strike`); none = 0 }
  if (none){ console.log(`Nothing Happens Today`) }
}

whatReallyHappensToday()
