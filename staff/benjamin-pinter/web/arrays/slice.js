/*
function slice(array, fromIndex = 0, end = array.length) {
    const newarray = []
    for (let i = fromIndex; i < end; i++) {
            const element = array[i]
            newarray.push(element)
        }
    return newarray
}
*/

/*
function slice(array, fromIndex = 0, end = array.length) {
    const newarray = []

    if (fromIndex < 0)
      fromIndex = array.length + fromIndex      
    
    for (let i = fromIndex; i < end; i++) {
            const element = array[i]
            newarray.push(element)
        }
    return newarray
}
*/

function slice(array, fromIndex = 0, end = array.length) {
    const newarray = []

    if (fromIndex < 0)
      fromIndex = array.length + fromIndex      

    if (end < 0)
        end = array.length + end
    
    for (let i = fromIndex; i < end; i++) {
            const element = array[i]
            newarray.push(element)
        }
    return newarray
}

//tests
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(slice(animals, 2))
// Expected output: Array ["camel", "duck", "elephant"]

console.log(slice(animals, 2, 4))
// Expected output: Array ["camel", "duck"]

console.log(slice(animals, 1, 5))
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(slice(animals, -2))
// Expected output: Array ["duck", "elephant"]

console.log(slice(animals, 2, -1))
// Expected output: Array ["camel", "duck"]

console.log(slice(animals))
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]