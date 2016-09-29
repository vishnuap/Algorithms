// Chapter-2: Fundamentals-2
// Statistics-Until-Doubles
// Implement a 20-sided die that randomly returns integers between 1 and 20 (inclusive). Roll the die, tracking statistics until you get a value twice in a row. After that display number of rolls, min, max and average

function stats(){
  var done = false,
      max = 0,
      min = 20,
      sum = 0,
      count = 0
      prev = 0,
      roll = 0

  while (!done){
    roll = Math.floor(Math.random() * 20) + 1
    count++
    sum += roll
    max = ((max < roll) ? roll : max)
    min = ((min > roll) ? roll : min)
    if (prev == roll){
      done = true
    } else {
      prev = roll
    }
  }

  console.log(`After ${count} rolls, The value repeated is ${prev}. The stats are Max = ${max}; Min = ${min}; Sum = ${sum}; Avg = ${sum / count}`)
}

stats()
