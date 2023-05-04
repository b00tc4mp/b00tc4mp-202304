function splice(array, start, deleteCount, item1) {
    if (deleteCount === 0) {
        for (var i = array.length - 1; i >= start; i--)
            array[i + 1] = array[i]
        
        array[start] = item1
        
        return []        
    } else if (deleteCount === 1) {
/*
TODO steps (by example)

['Jan', 'Feb', 'March', 'April', 'June']

['June']

['Jan', 'Feb', 'March', 'April', 'May']
*/
        var removed = []

        removed[removed.length] = array[start]

        array[start] = item1

        return removed
    }

}

// tests

// case 1

var months = ['Jan', 'March', 'April', 'June']

console.log(splice(months, 1, 0, 'Feb'))
// Inserts at index 1, and returns []

console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// case 2

var months = ['Jan', 'Feb', 'March', 'April', 'June']

console.log(splice(months, 4, 1, 'May'))

// Replaces 1 element at index 4, and returns ['April']
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]