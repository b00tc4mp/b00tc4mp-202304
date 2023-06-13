function every(array, callbackFn, thisArg) {
    for(var i = 0; i < array.length; i++) {
        if(!callbackFn(array[i]))
            return false
    }
    return true
}
// tests
//case 1
var isBelowThreshold = (currentValue) => currentValue < 40

var array1 = [1, 30, 39, 29, 10, 13]

console.log(every(array1, isBelowThreshold))
// Expected output: true

//case 2
var isBelowThreshold = (currentValue) => currentValue < 30
debugger
var array1 = [1, 30, 39, 29, 10, 13]

console.log(every(array1, isBelowThreshold))
// Expected output: true