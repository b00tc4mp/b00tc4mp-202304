function includes(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
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