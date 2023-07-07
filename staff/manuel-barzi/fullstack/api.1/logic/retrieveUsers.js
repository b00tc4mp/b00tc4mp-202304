const fs = require('fs')

function retrieveUsers(callback) {
    fs.readFile('data/users.json', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)

        callback(null, users)
    })
}

module.exports = retrieveUsers
