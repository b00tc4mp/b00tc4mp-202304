/* 
function lastIndexOf(array, searchElement) {
    for(i = array.length - 1; i > 0; i--) {
        var element = array[i]
        if(element === searchElement)
            return i
    }
    return -1
}
*/

function lastIndexOf(array, searchElement ,fromIndex = 0) {
    for(i = array.length - fromIndex - 1 ; i >= 0; i--) {
        var element = array[i]
        if(element === searchElement)
            return i
    }
    return -1
}

//Tests

//case 1
var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo']

console.log(lastIndexOf(animals, 'Dodo'))
// Expected output: 3

//case 2
console.log(lastIndexOf(animals, 'Tiger'))
// Expected output: 1

//case 3
console.log(lastIndexOf(animals, 'Dodp'))
// Expected output: -1

//case 4
console.log(lastIndexOf(animals, 'Dodo', 2))
// Expected output: 0