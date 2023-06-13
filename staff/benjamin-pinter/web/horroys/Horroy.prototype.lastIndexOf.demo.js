//case 1
var animals = new Horroy
animals[0] = 'Dodo'
animals[1] = 'Tiger'
animals[2] = 'Penguin'
animals[3] = 'Dodo'
animals.length = 4

console.log(animals.lastIndexOf('Dodo'))
// Expected output: 3

//case 2
console.log(animals.lastIndexOf('Tiger'))
// Expected output: 1

//case 3
console.log(animals.lastIndexOf('Dodp'))
// Expected output: -1

//case 4
console.log(animals.lastIndexOf('Dodo', 2))
// Expected output: 0