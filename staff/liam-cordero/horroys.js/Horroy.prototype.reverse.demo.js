var a1 = new Horroy 
a1[0] = 'one'
a1[1] = 'two'
a1[2] = 'three'
a1[3] ='four'
a1[4] = 'five' 
a1.length = 5


console.log(a1)
// Expected output: "a1:" Array ["one", "two", "three", "four", "five"]

var reversed = a1.reverse()

console.log(reversed)
// Expected output: "reversed:" Array ["five", "four", "three", "two", "one"]

console.log(a1)
// Expected output: "reversed:" Array ["five", "four", "three", "two", "one"]

console.log(reversed === a1)
// true