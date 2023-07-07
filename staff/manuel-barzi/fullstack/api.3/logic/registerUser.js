const { readFile, writeFile } = require('fs')

function registerUser(name, email, password, callback) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (typeof callback !== 'function') throw new Error('callback is not a function')

    readFile('data/users.json', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)

        const exists = users.some(user => user.email === email)

        if (exists) {
            callback(new Error('user already exists'))

            return
        }

        let id = 1

        if (users.length) {
            const last = users[users.length - 1]

            id = last.id + 1
        }

        const user = { id, name, email, password }

        users.push(user)

        const json2 = JSON.stringify(users)

        writeFile('data/users.json', json2, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })
}

module.exports = registerUser