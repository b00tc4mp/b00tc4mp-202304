var promise = new Promise(function (resolve, reject) {
    var ran = Math.random()

    if (ran < 0.5)
        resolve('ok')
    else
        reject('ko')
})

promise
    .then(result => console.log('success', result))
    .catch(result => console.error('fail', result))
//VM534:11 success ok

var promise = new Promise(function (resolve, reject) {
    var ran = Math.random()

    if (ran < 0.5)
        resolve('ok')
    else
        reject('ko')
})

promise
    .then(result => console.log('success', result))
    .catch(result => console.error('fail', result))
//VM535:12 fail ko