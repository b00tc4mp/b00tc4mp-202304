function join(array) {
    // TODO implement me   
}

// tests

// case 1

var elements = ['Fire', 'Air', 'Water']

console.log(elements.join())
// "Fire,Air,Water"

// case 2

var elements = ['Fire', 'Air', 'Water']

console.log(elements.join(''))
// "FireAirWater"

// case 3

var elements = ['Fire', 'Air', 'Water']

console.log(elements.join('$'))
// "Fire$Air$Water"