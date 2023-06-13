function map(array, callback) {
    var mapped = []
    for (var i = 0; i < array.length ; i++)
       mapped[i] = callback(array[i])
    
    return mapped
}
//Tests

//Case1

const array1 = [1, 4, 9, 16]

// Pass a function to map
const map1 = map(array1, x => x * 2)

console.log(map1)
// Expected output: Array [2, 8, 18, 32]

//Case2

const array2 = ['aaa','bbb','ccc']

// Pass a function to map
const map2 = map(array2, element => element.toUpperCase())

console.log(map2)
// Expected output: Array ['AAA','BBB','CCC']