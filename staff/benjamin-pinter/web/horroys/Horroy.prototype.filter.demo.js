// case 0

var h = new Horroy

h[0] = 'banana'
h.length++
h[1] = 'apple'
h.length++
h[2] = 'orange'
h.length++

var eFruits = h.filter(elements => elements.includes('e'))
console.log(eFruits)

