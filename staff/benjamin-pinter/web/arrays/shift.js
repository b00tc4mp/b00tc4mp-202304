function shift(array) {
    var element = array[0]
    for (i = 0; i < array.length; i++)
            array[i] = array[i+1]
    array.length--
    return element
}
//Tests

//case 1
var array1 = [1, 2, 3]

var firstElement = shift(array1)

console.log(array1)
// Expected output: Array [2, 3]

console.log(firstElement)
// Expected output: 1