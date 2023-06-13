



const a1 = new Horroy 
a1[0] = 1
a1[1] = 4
a1[2] = 9
a1[3] = 16
a1.length = 4 

// Pass a function to map
const map1 = a1.map( x => x * 2)

console.log(map1)
// Expected output: Array [2, 8, 18, 32]

//Case2

const a2 = new Horroy
a2[0] = 'aaa'
a2[1] = 'bbb'
a2[2] = 'ccc'
a2.length = 3
// Pass a function to map
const map2 = a2.map(element => element.toUpperCase())

console.log(map2)
// Expected output: Array ['AAA','BBB','CCC']
