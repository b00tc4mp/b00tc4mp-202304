function pop(array) {
    var last = plants[plants.length - 1]

    array.length--
    
    return last
}

// tests

// case 1

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

console.log(pop(plants))
// Expected output: "tomato"

console.log(plants)
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// case 2

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale']

console.log(pop(plants))

console.log(plants)
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]