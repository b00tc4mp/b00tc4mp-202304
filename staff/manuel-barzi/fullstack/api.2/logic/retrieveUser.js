const { readFile } = require('fs')

function retrieveUser(userId, callback) {
    if (typeof userId !== 'number') throw new Error('userId is not a number')
    if (typeof callback !== 'function') throw new Error('callback is not a function')

    readFile('data/users.json', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)

        const user = users.find(user => user.id === userId)

        if (!user) {
            callback(new Error('user not found'))

            return
        }

        delete user.password

        callback(null, user)
    })
}

module.exports = retrieveUser