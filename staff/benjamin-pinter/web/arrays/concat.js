function concat(firstArray, secondArray) {
    var combinedArray = []
    var combinedLength = firstArray.length + secondArray.length
    for(var i = 0; i < firstArray.length; i++) {
        combinedArray[i] = firstArray[i]
    }
    for(var a = 0; a < secondArray.length; a++) {
        combinedArray[combinedArray.length] = secondArray[a]
    }
    return combinedArray
}
//Tests

//case 1
var array1 = ['a', 'b', 'c']
var array2 = ['d', 'e', 'f']
var array3 = concat(array1, array2)

console.log(array3)
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
