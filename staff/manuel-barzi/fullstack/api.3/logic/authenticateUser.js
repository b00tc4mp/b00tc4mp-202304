const { readFile } = require('fs')

function authenticateUser(email, password, callback) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (typeof callback !== 'function') throw new Error('callback is not a function')

    readFile('data/users.json', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)

        const user = users.find(user => user.email === email)

        if (!user) {
            callback(new Error('user not found'))

            return
        }

        if (user.password !== password) {
            callback(new Error('wrong credentials'))

            return
        }

        callback(null, user.id)
    })
}

module.exports = authenticateUser