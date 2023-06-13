function find(array, callbackFn) {
    for (var i = 0; i < array.length ; i++) {
        if (callbackFn(array[i]))
            return array[i]
    }
    return
}
//tests

//case1

const array1 = [5, 12, 8, 130, 44]

const found = find(array1, element => element > 10);

console.log(found)
// Expected output: 12
