function a() {
    console.log('a')

    return !true
}

function b() {
    console.log('b')

    return true
}


a() && b()
// VM1719:2 a
// false