function forEach(array, callback) {
    for (var i = 0; i < array.length; i++)
        callback(array[i])
}

// tests

// case 1

var array1 = ['a', 'b', 'c']

forEach(array1, function(element) { 
  console.log(element) 
})
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// case 1

var array1 = [10, 20, 30]

var result = 0

forEach(array1, function(element) { 
  result = result + element
})

console.log(result)
// Expected 60

