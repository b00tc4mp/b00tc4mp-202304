[10, 20, 30].forEach(element => console.log(element))

new Promise((resolve, reject) => {
    console.log(0)

    resolve(100)
})
    .then(res => {
        console.log(res)

        throw 500

        return 101
    })
    .then(res => {
        console.log(res)

        return 102
    })
    .catch(res => {
        console.error(res)

        return 103
    })
    .then(res => {
        console.log(res)

        return 104
    })
    .then(res => {
        console.log(res)

        throw 501

        return 105
    })
    .then(res => {
        console.log(res)

        return 106
    })
    .then(res => console.log(res))
    .catch(res => console.error(res))

console.log('A' + 'B' + 'C')


// VM895: 1 10
// VM895: 1 20
// VM895: 1 30
// VM895: 4 0
// VM895: 45 ABC
// VM895: 9 100
// VM895: 21 500
//     (anonymous) @VM895: 21
// Promise.catch(async)
//     (anonymous) @VM895: 20
// VM895: 26 103
// VM895: 31 104
// VM895: 43 501
//     (anonymous) @VM895: 43
// Promise.catch(async)
//     (anonymous) @VM895: 43
// undefined