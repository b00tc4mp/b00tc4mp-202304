function unshift(array, ...elements) {
    var a = elements.length -1
    for(var i = 0; i < elements.length; i++) {
        array.length++
        for (var j = array.length - 1; j >= 0; j--)
            array[j] = array[j-1]
        
        array[0] = elements[a]
        a--
    }
    return array.length
}
//Tests

//case 1
var array1 = [1, 2, 3]

console.log(unshift(array1, 4, 5))
// Expected output: 5

console.log(array1)
// Expected output: Array [4, 5, 1, 2, 3]

//case 2
var array2 = ['aaa', 'bbb', 'ccc']

console.log(unshift(array2, 'ddd', 'eee','fff'))
// Expected output: 5

console.log(array2)
// Expected output: Array ['ddd', 'eee','fff','aaa', 'bbb', 'ccc']