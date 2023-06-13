function toReversed(array) {
    var reversedArray = []
    var a = array.length - 1
    var b = 0
    for(let i = 1 + array.length%2; i <= array.length; i++) {
        reversedArray[b] =array[a]
        reversedArray[a] =array[b]
        a--
        b++
    }
    return reversedArray
}

// tests

//case 1
var items = [1, 2, 3]
console.log(items) // [1, 2, 3]

var reversedItems = toReversed(items)
console.log(reversedItems) // [3, 2, 1]
console.log(items) // [1, 2, 3]