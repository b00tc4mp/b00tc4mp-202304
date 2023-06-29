var o = { a: 1, b: 2 }

//var a = o['a']
//var b = o['b']

//var a = o.a
//var b = o.b

var { a, b } = o

//console.log(a, b)
// 1 2

var r = [3, 4]

//var c = r['0']
//var d = r['1']

//var c = r[0]
//var d = r[1]

//var { 0: c, 1: d } = r

var [c, d] = r

console.log(c, d)
// 3 4