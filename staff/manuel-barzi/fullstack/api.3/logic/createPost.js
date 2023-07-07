const { readFile, writeFile } = require('fs')

function createPost(userId, image, text, callback) {
    if (typeof userId !== 'number') throw new Error('userId is not a number')
    if (typeof image !== 'string') throw new Error('image is not a string')
    if (typeof text !== 'string') throw new Error('text is not a string')
    if (typeof callback !== 'function') throw new Error('callback is not a function')

    readFile('data/users.json', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const users = JSON.parse(json)

        const exists = users.some(user => user.id === userId)

        if (!exists) {
            callback(new Error('user not found'))

            return
        }

        readFile('data/posts.json', (error, json) => {
            if (error) {
                callback(error)

                return
            }

            const posts = JSON.parse(json)

            let id = 1

            if (posts.length) {
                const last = posts[posts.length - 1]

                id = last.id + 1
            }

            const post = {
                id,
                author: userId,
                image,
                text,
                date: new Date
            }

            posts.push(post)

            const json2 = JSON.stringify(posts)

            writeFile('data/posts.json', json2, error => {
                if (error) {
                    callback(error)

                    return
                }

                callback(null)
            })
        })
    })
}

module.exports = createPost