/*
function push(array, element) {
    array[array.length] = element

    return array.length
}
*/

function push(array, ...elements) {
    for (let i = 0; i < elements.length; i++)
        array[array.length] = elements[i]

    return array.length
}

// tests

// case 1

var animals = ['pigs', 'goats', 'sheeps']

var count = push(animals, 'cows')

console.log(count)
// Expected output: 4

console.log(animals)
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

// case 2

var animals = ['pigs', 'goats', 'sheeps', 'cows']

var count = push(animals, 'chickens', 'cats', 'dogs')

console.log(count)
// 7

console.log(animals)
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]