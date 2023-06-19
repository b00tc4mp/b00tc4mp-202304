const fs = require('fs')

function registerUser(name, email, password, callback) {
    fs.readFile('data/users.json', (error, json) => {
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

        const user = { name, email, password }

        users.push(user)

        const json2 = JSON.stringify(users)

        fs.writeFile('data/users.json', json2, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })
}

module.exports = registerUser