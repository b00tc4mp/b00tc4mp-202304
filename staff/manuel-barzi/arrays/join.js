/*
function join(array) {
    let joined = ''

    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        joined = joined + element

        if (i < array.length - 1)
            joined = joined + ','
    }

    return joined
}
*/

/*
function join(array, separator = ',') {
    let joined = ''

    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        joined = joined + element

        if (i < array.length - 1)
            joined = joined + separator
    }

    return joined
}
*/

function join(array, separator = ',') {
    let joined = ''

    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        if (element !== undefined)
            joined = joined + element

        if (i < array.length - 1)
            joined = joined + separator
    }

    return joined
}

// tests

// case 1

var elements = ['Fire', 'Air', 'Water']

console.log(join(elements))
// "Fire,Air,Water"

// case 2

var elements = ['Fire', 'Air', 'Water']

console.log(join(elements, ''))
// "FireAirWater"

// case 3

var elements = ['Fire', 'Air', 'Water']

console.log(join(elements, '$'))
// "Fire$Air$Water"

// case 4

var elements = [10, 20, 30]

console.log(join(elements, '<'))
// "10<20<30"

// case 5

var elements = [1, undefined, 3]
    
console.log(join(elements))
// '1,,3'