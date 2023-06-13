//Case1

const a= new Horroy
a[0] = 1
a[1] = 2
a[2] = 3
a[3] = 4
a[4] = 5
a.length = 5

// Checks whether an element is even
const even = (element) => element % 2 === 0

console.log(a.some(even))
// Expected output: true