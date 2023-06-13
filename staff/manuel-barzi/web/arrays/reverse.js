function reverse(array) {
    for (let i = 0; i < array.length; i++) {
        
    }
}

// tests

// case 1

var array1 = ['one', 'two', 'three']
console.log(array1)
// Expected output: "array1:" Array ["one", "two", "three"]

var reversed = reverse(array1)

console.log(reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

console.log(array1)
// Expected output: "reversed:" Array ["three", "two", "one"]

console.log(reversed === array1)
// true