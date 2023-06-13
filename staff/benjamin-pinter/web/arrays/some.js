function some(array, callbackFn) {
    for (var i = 0; i < array.length ; i++) {
        if (callbackFn(array[i]))
            return true
    }
    return false
}
//Tests

//Case1

const array = [1, 2, 3, 4, 5]

// Checks whether an element is even
const even = (element) => element % 2 === 0

console.log(some(array, even))
// Expected output: true
