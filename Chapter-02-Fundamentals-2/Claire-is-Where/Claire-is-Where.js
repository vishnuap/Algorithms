// Chapter-2: Fundamentals-2
// Claire-is-Where
// Create 4 functions to track the travels of Claire:
// 1. reset() - moves Claire home to the origin (0,0)
// 2. moveBy(xOffset, yOffset) - moves Claire by those amounts in those directions
// 3 & 4. xLocation() & yLocation - return how far Claire is from home in X and Y directions respectively.
// 5. distFromHome() - return the diagonal distance from home
// e.g., after reset(), moveBy(1,-2), moveBy(3,1) calling xLocation() and yLocation should return 4 and -1

var claire = {
  x: 0,
  y: 0
}

function reset(){
  claire.x = 0
  claire.y = 0
}

function moveBy(xOffset, yOffset){
  claire.x += xOffset
  claire.y += yOffset
}

function xLocation(){
  console.log(`Claire's current X location is ${claire.x}`)
}

function yLocation(){
  console.log(`Claire's current Y location is ${claire.y}`)
}

function distFromHome(){
  console.log(`Claire's distance from home is ${Math.sqrt(Math.pow(claire.x, 2) + Math.pow(claire.y, 2))}`)
}

reset()
moveBy(3, 1)
moveBy(1, -2)
xLocation()
yLocation()
distFromHome()
