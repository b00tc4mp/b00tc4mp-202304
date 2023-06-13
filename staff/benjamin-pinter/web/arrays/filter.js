function filter(array, callbackFn) {
    var fr = []
    var a = 0
    for (var i = 0; i < array.length ; i++) {
        if (callbackFn(array[i])) {
            fr[a] = array[i]
            a++
        }
    }
    return fr
}
//tests

// case1

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = filter(words, word => word.length > 6)

console.log(result)
// Expected output: Array ["exuberant", "destruction", "present"]
