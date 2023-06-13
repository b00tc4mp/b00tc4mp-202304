function some(array, callbackFn) {
    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i]))
            return true
    }
    return false
}


var array1 = [1, 2, 3, 4,]

// Checks whether an element is even
var even = (element) => element % 2 === 0

console.log(some(array1, even))

// Expected output: true

// Test 2 

var array2 = ['run', 'jump', 'hide', 'slide']

var even = element => element.length === 5

console.log(some(array2, even))

// test 3 

var array3 = [40, 50, 67, 97, 7]

var additionEquals9 = element => element++ === 9

console.log(some(array3, additionEquals9))

