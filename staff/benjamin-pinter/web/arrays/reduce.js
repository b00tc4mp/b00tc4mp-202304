function reduce(array, callbackFn, initialValue) {
    if(initialValue === undefined)
        var accumulator = array[0]
    else
        var accumulator = initialValue
    
    for (var i = initialValue === undefined? 1 : 0; i < array.length ; i++) {
        accumulator = callbackFn(accumulator, array[i])
    }
    
    return accumulator
}
//Tests

//Case1

const array1 = [1, 2, 3, 4]

// 0 + 1 + 2 + 3 + 4
const initialValue = 0
const sumWithInitial = reduce(array1, 
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue)

console.log(sumWithInitial)
// Expected output: 10

// case 2

const cart = [
    { name: 'socks', size: 45, price: 15, quantity: 3 },
    { name: 'shorts', size: 'xl', price: 20, quantity: 2 },
    { name: 'shoes', size: 45, price: 70, quantity: 1 }
]

/*
var sum = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
    0
)
*/

var sum = reduce(
    cart,
    (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
    0
)

console.log(sum)

//Case3

const array3 = [1, 2, 3, 4]

// 0 + 1 + 2 + 3 + 4
const sumWithInitiall = reduce(array3, 
  (accumulator, currentValue) => accumulator + currentValue)

console.log(sumWithInitiall)
// Expected output: 10

// case 4

const people = [
    { name: 'Peter', profile: 'modafoca' },
    { name: 'Anna', profile: 'pisofscheisse' },
    { name: 'Tania', profile: 'kind' },
    { name: 'Abraham', profile: 'modafoca' },
    { name: 'Elisa', profile: 'modafoca' },
    { name: 'John', profile: 'kind' },
    { name: 'Maria', profile: 'pisofscheisse' },
    { name: 'Alina', profile: 'modafoca' },
]

const initialAccum = {modafoca: 0, pisofscheisse: 0, kind: 0}

const accumulateProfileStats = (accumulator, currentValue) => {
        if (currentValue.profile === 'modafoca')
            accumulator.modafoca++
        else if (currentValue.profile === 'pisofscheisse')
            accumulator.pisofscheisse++
        else if (currentValue.profile === 'kind')
            accumulator.kind++

        return accumulator
    }

const stats = reduce(people, accumulateProfileStats, initialAccum )
console.log(stats)
// { modafoca: 4, pisofscheisse: 2, kind: 2 }