function splice(array, start, deleteCount, ...items) {
    if (deleteCount === 0) {
        for (var i = array.length - 1; i >= start; i--)
            array[i + items.length] = array[i]

        for (var i = 0; i < items.length; i++)
            array[start + i] = items[i]
        
        return []        
    } else if (deleteCount > 0) {
        var removed = []

        for (var i = start; i < start + deleteCount; i++)
            removed[removed.length] = array[i]

        var displacement = items.length - deleteCount

        for (var i = array.length - 1 ; i >= start + deleteCount; i--)
            array[i + displacement] = array[i]

        if (displacement < 0)
            array.length = array.length + displacement

        for (var i = 0; i < items.length; i++)
            array[start + i] = items[i]
        
        return removed
    }
}

// tests

// case 1

var months = ['Jan', 'March', 'April', 'June']

console.log(splice(months, 1, 0, 'Feb'))
// Inserts at index 1, and returns []

console.log(months);
// Expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

// case 2

var months = ['Jan', 'Feb', 'March', 'April', 'June']

console.log(splice(months, 4, 1, 'May'))

// Replaces 1 element at index 4, and returns ['April']
console.log(months);
// Expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

// case 3

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']

console.log(splice(myFish, 2, 0, 'drum', 'guitar'))
// expect []

console.log(myFish)
// expect ['angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon']

// case 4

var cars = ['vw', 'renault', 'audi', 'bmw', 'fiat']

console.log(splice(cars, 1, 2, 'maseratti', 'bugatti', 'ferrari'))
// expect ['renault', 'audi']

console.log(cars)
// expect ['vw', 'maseratti', 'bugatti', 'ferrari', 'fiat']

// case 5

var cars = ['vw', 'renault', 'audi', 'bmw', 'fiat']

console.log(splice(cars, 1, 2, 'maseratti', 'bugatti', 'ferrari', 'rimac'))
// expect ['renault', 'audi']

console.log(cars)
// expect ['vw', 'maseratti', 'bugatti', 'ferrari', 'rimac', 'fiat']

// case 6

var cars = ['vw', 'renault', 'audi', 'bmw', 'fiat']

console.log(splice(cars, 1, 3, 'maseratti', 'bugatti'))
// expect ['renault', 'audi']

console.log(cars)
// expect ['vw', 'maseratti', 'bugatti', 'ferrari', 'rimac', 'fiat']

// case 7

var cars = ['vw', 'renault', 'audi', 'bmw', 'fiat', 'lada']

console.log(splice(cars, 1, 4, 'maseratti', 'bugatti'))
// expect ['renault', 'audi']

console.log(cars)
// expect ['vw', 'maseratti', 'bugatti', 'ferrari', 'rimac', 'fiat']