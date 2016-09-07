// Chapter-1: Fundamentals
// You-say-its-your-Birthday:
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day..."

var myBDate = [3, 6]

function bd(num1, num2){
    if ((myBDate.indexOf(num1) > -1) && (myBDate.indexOf(num2) > -1)){
        console.log("How did you know?")
    } else {
        console.log("Just another day...")
    }
}

bd(1, 2)
bd(3, 6)
bd(6, 3)
bd(5 ,4)