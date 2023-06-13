//case 1
var isBelowThreshold = (currentValue) => currentValue < 40

var a = new Horroy
a[0] = 1
a[1] = 30
a[2] = 39
a[3] = 29
a[4] = 10
a[5] = 13
a.length = 6

console.log(a.every(isBelowThreshold))
// Expected output: true

//case 2
var isBelowThreshold = (currentValue) => currentValue < 30

var a = new Horroy
a[0] = 1
a[1] = 30
a[2] = 39
a[3] = 29
a[4] = 10
a[5] = 13
a.length = 6

console.log(a.every(isBelowThreshold))
// Expected output: false