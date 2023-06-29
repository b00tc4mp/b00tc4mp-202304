function a() {
    console.log('a')

    return true
}

function b() {
    console.log('b')

    return true
}


a() && b()
// VM1710:2 a
// VM1710:8 b
// true