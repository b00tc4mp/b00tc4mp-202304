// case 0

var plants = new Horroy
plants[0] = 'broccoli'
plants[1] = 'cauliflower'
plants[2] = 'cabbage'
plants[3] = 'kale'
plants[4] = 'tomato'
plants.length = 5

console.log(plants.pop())
// Expected output: "tomato"

console.log(plants)
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// case 1

var plants = new Horroy
plants[0] = 'broccoli'
plants[1] = 'cauliflower'
plants[2] = 'cabbage'
plants[3] = 'kale'
plants.length = 4

console.log(plants.pop())

console.log(plants)
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]