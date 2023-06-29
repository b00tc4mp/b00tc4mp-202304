function a() {
    console.log('a')

    return true
}

function b() {
    console.log('b')

    return !true
}


a() && b()
// VM1724: 2 a
// VM1724: 8 b
// false