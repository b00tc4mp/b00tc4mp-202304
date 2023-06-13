function indexOf(array, searchElement, fromIndex = 0) {
    for(let i = fromIndex; i < array.length; i++) {
        const element = array[i]

        if (element === searchElement)
            return i
    }
    return -1
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