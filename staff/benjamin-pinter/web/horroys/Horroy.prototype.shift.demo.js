//case 0
var a = new Horroy
a[0] = 1
a[1] = 2
a[2] = 3
a.length = 3

var firstElement = a.shift()

console.log(a)
// Expected output: Array [2, 3]

console.log(firstElement)
// Expected output: 1