function findIndex(array, callbackFn) {
    for (var i = 0; i < array.length ; i++) {
        if (callbackFn(array[i]))
            return i
    }
    return -1
}
//tests

//case1
const array1 = [5, 12, 8, 130, 44]

const isLargeNumber = (element) => element > 13

console.log(findIndex(array1, isLargeNumber))
// Expected output: 3

//case2
const array2 = ["bauma","Nisse","landsmann"]

const isLargeName = (element) => element.length > 6

console.log(findIndex(array2, isLargeName))
// Expected output: 2
