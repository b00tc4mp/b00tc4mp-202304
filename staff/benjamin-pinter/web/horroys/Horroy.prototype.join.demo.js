// case 1

var elements = new Horroy
elements[0] = 'Fire'
elements[1] = 'Air'
elements[2] = 'Water'
elements.length = 3

console.log(elements.join())
// "Fire,Air,Water"

// case 2
var elements = new Horroy
elements[0] = 'Fire'
elements[1] = 'Air'
elements[2] = 'Water'
elements.length = 3


console.log(elements.join(''))
// "FireAirWater"

// case 3
var elements = new Horroy
elements[0] = 'Fire'
elements[1] = 'Air'
elements[2] = 'Water'
elements.length = 3


console.log(elements.join('$'))
// "Fire$Air$Water"

// case 4

var elements = new Horroy
elements[0] = 10
elements[1] = 20
elements[2] = 30
elements.length = 3

console.log(elements.join('<'))
// "10<20<30"

// case 5
var elements = new Horroy
elements[0] = 1
elements[1] = undefined
elements[2] = 3
elements.length = 3

console.log(elements.join())
// '1,,3'