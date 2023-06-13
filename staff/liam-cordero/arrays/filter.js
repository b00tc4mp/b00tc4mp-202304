function filter (array, callbackFn) {
    var copiedarray = []
    var a = 0
    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i])){
            copiedarray[a] = array[i]
            a++
        }
    }
    return copiedarray    
}




const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

var result = filter(words, word => word.length > 6)

console.log(result)
// Expected output: Array ["exuberant", "destruction", "present"]

// Case 2 

const nums = [10, 21, 35, 45, 50]

var result = filter(nums, number => number%3 === 0)

console.log(result)