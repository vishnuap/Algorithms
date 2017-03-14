// Chapter-1: Fundamentals
// Poor-Kenny
// Kenny tries to stay safe but somehow everyday something happens. If there is a 10% chance of volcano, 15% chance of tsunami, 20% chance of earthquake, 25% chance of blizzard and 30% chance of meteor strike, write a function whatHappensToday() to print the outcome

// Assume only one event will happen per day
function whatHappensToday(){
  var random = Math.floor(Math.random() * 20)
  switch (random){
    case 0:
    case 1:
      console.log(`Volcano`)
      break
    case 2:
    case 3:
    case 4:
      console.log(`Tsunami`)
      break
    case 5:
    case 6:
    case 7:
    case 8:
      console.log(`Earthquake`)
      break
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
      console.log(`Blizzard`)
      break
    default:
      console.log(`Meteor Strike`)
  }
}

whatHappensToday()
