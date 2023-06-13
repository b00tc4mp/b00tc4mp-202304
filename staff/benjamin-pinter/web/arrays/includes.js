function includes(array, searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
        const element = array[i]

        if (element === searchElement)
            return true
    }

    return false
}

// tests

// case 1

var a = [10, 20, 30, 40, 50]

var result = includes(a, 40)
console.log(result) // true

// case 2

var a = [10, 20, 30, 40, 50]

var result = includes(a, 45)
console.log(result) // false

// case 3

var a = [10, 20, 30, 40, 50]

var result = includes(a, 40, 4)
console.log(result) // false