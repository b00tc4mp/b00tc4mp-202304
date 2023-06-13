function find(array, callbackFn) {
    for (let i = 0; i < array.length; i++) {
        if(callbackFn(array[i]))
            return array[i]
    }
    return
}

const array1 = [5, 12, 8, 130, 44]

var found = find(array1, element => element > 10)

console.log(found)
// Expected output: 12

// test 2 
var array2 = ['Benjamin', 'Bauma', 'Teile', 'Ben']

var found = find(array2, element => element.length >4)

console.log(found)

// test 3 

var array3 = [90, 30, 27, 45, 81]

var found = find(array3, element => element%9 === 0)

console.log(found)
