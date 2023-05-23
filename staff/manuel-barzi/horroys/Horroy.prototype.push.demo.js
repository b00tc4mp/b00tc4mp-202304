// case 0

var animals = new Horroy
animals[0] = 'pigs'
animals[1] = 'goats'
animals[2] = 'sheep'
animals.length = 3

var count = animals.push('cows')
console.log(count)
// Expected output: 4
console.log(animals)
// Expected output: Horroy {0:"pigs", 1:"goats", 2:"sheep", 3:"cows", length: 4 }

// case 1

var animals = new Horroy
animals[0] = 'pigs'
animals[1] = 'goats'
animals[2] = 'sheep'
animals.length = 3

console.log(animals.push('chickens', 'cats', 'dogs'))
// Expected output: 6
console.log(animals)
// Expected output: Horroy {0:"pigs", 1:"goats", 2:"sheep", 3: "chickens", 4: "cats", 5: "dogs", length: 6 }