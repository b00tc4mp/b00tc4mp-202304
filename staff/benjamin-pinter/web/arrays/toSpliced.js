function toSpliced(array, start, deleteCount, ...items) {
    var result = []
    for (var i = 0; i < array.length; i++)
        result[i] = array[i]
    if (deleteCount === 0) {
        for (var i = result.length - 1; i >= start; i--)
            result[i + items.length] = result[i]

        for (var i = 0; i < items.length; i++)
            result[start + i] = items[i]
             
    } else if (deleteCount > 0) {
        var removed = []

        for (var i = start; i < start + deleteCount; i++)
            removed[removed.length] = result[i]

        var displacement = items.length - deleteCount

        for (var i = result.length - 1 ; i >= start + deleteCount; i--)
            result[i + displacement] = result[i]

        if (displacement < 0)
            result.length = result.length + displacement

        for (var i = 0; i < items.length; i++)
            result[start + i] = items[i]
    }
    return result
}

// tests

// case 1

var months = ['Jan', 'March', 'April', 'June']

console.log(toSpliced(months, 1, 0, 'Feb'))
// Expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

console.log(months);
// Expected output: Array ['Jan', 'March', 'April', 'June']

// case 2

var months = ['Jan', 'Feb', 'March', 'April', 'June']

console.log(toSpliced(months, 4, 1, 'May'))

// Expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

console.log(months);
// Expected output: Array ['Jan', 'March', 'April', 'June']

// case 3

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']

console.log(toSpliced(myFish, 2, 0, 'drum', 'guitar'))
// expect ['angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon']

console.log(myFish)
// expect ['angel', 'clown', 'mandarin', 'sturgeon']

// case 4

var cars = ['vw', 'renault', 'audi', 'bmw', 'fiat']

console.log(toSpliced(cars, 1, 2, 'maseratti', 'bugatti', 'ferrari'))
// expect ['vw', 'maseratti', 'bugatti', 'ferrari', 'bmw', 'fiat']

console.log(cars)
// expect ['vw', 'renault', 'audi', 'bmw', 'fiat']