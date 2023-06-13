function splice(array, start, deleteCount, item1) {
    /*
    TODO steps (by example)
    
    ['Jan', 'March', 'April', 'June']

    ['Jan', 'March', 'April', 'June', 'June']
    ['Jan', 'March', 'April', 'April', 'June']
    ['Jan', 'March', 'March', 'April', 'June']
    
    ['Jan', 'Feb', 'March', 'April', 'June']
    */

    for (var i = array.length - 1; i >= start; i--)
        array[i + 1] = array[i]

    array[start] = item1

    return []
}

// tests

// case 1

var months = ['Jan', 'March', 'April', 'June']

console.log(splice(months, 1, 0, 'Feb'))
// Inserts at index 1, and returns []

console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]