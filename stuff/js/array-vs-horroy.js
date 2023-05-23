// Array

var a = new Array

a[0] = 'banana'
a[1] = 'apple'
a[2] = 'orange'

/*
for (var i = 0; i < a.length; i++)
    console.log(a[i])
*/

//a.forEach(element => console.log(element))

var eFruits = a.filter(elements => elements.includes('e'))
console.log(eFruits)

// VM4662:15 (2) ['apple', 'orange'] length: 2
// undefined

// Horroy

function Horroy() {
    this.length = 0
}

Horroy.prototype.forEach = function(callback) {
    for (var i = 0; i < this.length; i++)
        callback(this[i])
}

Horroy.prototype.filter = function(callback) {
    var filtered = new Horroy

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (callback(element)) {
            filtered[filtered.length] = element
            filtered.length++
        }
    }
 
    return filtered
}

// Horroy

var h = new Horroy

h[0] = 'banana'
h.length++
h[1] = 'apple'
h.length++
h[2] = 'orange'
h.length++

/*
for (var i = 0; i < h.length; i++)
    console.log(h[i])
*/

//h.forEach(element => console.log(element))

var eFruits = h.filter(elements => elements.includes('e'))
console.log(eFruits)

// VM4900:43 Horroy {0: 'apple', 1: 'orange', length: 2}
// undefined