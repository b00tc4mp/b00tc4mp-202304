function indexOf(array, searchElement) {
    // TODO implement me
}

// tests

// case 0

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

console.log(indexOf(beasts, 'bison')) // 1

// case 1

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

console.log(indexOf(beasts, 'elephant')) // -1

// case 2

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

console.log(indexOf(beasts, 'bison', 2)) // 4