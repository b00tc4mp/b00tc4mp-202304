function forEach(array, callbackFn) {
    for (var i = 0; i < array.length ; i++)
        callbackFn(array[i])
}
//Tests

//Case1

const array1 = ['a', 'b', 'c']

forEach(array1, element => console.log(element))

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"