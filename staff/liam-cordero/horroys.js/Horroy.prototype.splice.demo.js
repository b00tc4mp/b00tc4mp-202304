// tests

// case 1

var months = new Horroy

months[0] = 'Jan'
months[1] = 'March'
months[2] = 'April'
months[3] = 'June'

months.length = 4

console.log(months.splice(1, 0, 'Feb'))

console.log(months);
// Expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

// case 2

var months = new Horroy

months[0] = 'Jan'
months[1] = 'February'
months[2] = 'March'
months[3] = 'April'
months[4] = 'June'

months.length = 5

console.log(months.splice( 4, 1, 'May'))

// Replaces 1 element at index 4, and returns ['April']
console.log(months);
// Expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

// case 3

var myFish = new Horroy

myFish[0] = 'angel'
myFish[1] = 'clownn'
myFish[2] = 'mandarin'
myFish[3] = 'sturgeon'

myFish.length = 4

console.log(myFish.splice(2, 0, 'drum', 'guitar'))
// expect []

console.log(myFish)
// expect ['angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon']

// case 4

var cars = new Horroy

cars[0] = 'vw'
cars[1] = 'renault'
cars[2] = 'audi'
cars[3] = 'bmw'
cars[4] = 'fiat'

cars.length = 5 

console.log(cars.splice(1, 2, 'maseratti', 'bugatti', 'ferrari'))
// expect ['renault', 'audi']

console.log(cars)
// expect ['vw', 'maseratti', 'bugatti', 'ferrari', 'fiat']

// case 5

var cars2 = new Horroy

cars2[0] = 'vw'
cars2[1] = 'renault'
cars2[2] = 'audi'
cars2[3] = 'bmw'
cars2[4] = 'fiat'

cars2.length = 5

console.log(cars2.splice(1, 2, 'maseratti', 'bugatti', 'ferrari', 'rimac'))
// expect ['renault', 'audi']

console.log(cars2)
// expect ['vw', 'maseratti', 'bugatti', 'ferrari', 'rimac', 'fiat']


// case 6

var cars4 = new Horroy

cars4[0] = 'vw'
cars4[1] = 'renault'
cars4[2] = 'audi'
cars4[3] = 'bmw'
cars4[4] = 'fiat'
cars4[5] = 'lada'

cars4.length = 6

console.log(cars3.splice( 1, 4, 'maseratti', 'bugatti'))
// expect ['renault', 'audi']

console.log(cars3)
// expect ['vw', 'maseratti', 'bugatti', 'ferrari', 'rimac', 'fiat]