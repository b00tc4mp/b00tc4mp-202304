
//Tests

//case 1
var a1 = new Horroy 
a1[0] = 10
a1[1] = 20
a1[2] = 30
a1.length = 3

console.log(a1.unshift(40, 50))
// Expected output: 5

console.log(a1)
// Expected output: Horroy [40, 50, 10, 20, 30]

//case 2
var a2 = new Horroy
a2[0] = 'aaa'
a2[1] = 'bbb'
a2[2] = 'ccc'
a2.length = 3

console.log(a2.unshift('ddd', 'eee','fff'))
// Expected output: 6

console.log(a2)
// Expected output: Horroy ['ddd', 'eee','fff','aaa', 'bbb', 'ccc']

//case 3
var a3 = new Horroy 
a3[0] = 10
a3[1] = 20
a3[2] = 30
a3.length = 3

console.log(a3.unshift(40, 50, 60 ,70, 80))
// Expected output: 8

console.log(a3)
// Expected output: Horroy [40, 50, 60, 70, 80, 10, 20, 30]
