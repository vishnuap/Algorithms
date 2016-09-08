// Chapter-1: Fundamentals
// Counting-the-Dojo-Way:
// Print integers 1 to 100, If divisible by 5, print "Coding" instead. If by 10, also print "Dojo"

for (let i = 1; i <= 100; i++){
    switch (true){
        case (i % 10 == 0):
            console.log(`Coding Dojo`)
            break
        case (i % 5 == 0):
            console.log(`Coding`)
            break
        default:
            console.log(`${i}`)
    }
}