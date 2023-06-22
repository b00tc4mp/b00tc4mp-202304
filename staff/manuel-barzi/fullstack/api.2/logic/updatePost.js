const { readFile, writeFile } = require('fs')

function updatePost(userId, postId, image, text, callback) {
    if (typeof userId !== 'number') throw new Error('userId is not a number')
    if (typeof postId !== 'number') throw new Error('postId is not a number')
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

            const post = posts.find(post => post.id === postId)

            if (!post) {
                callback(new Error('post not found'))

                return
            }

            if (post.author !== userId) {
                callback(new Error('user is not the author of the post'))

                return
            }

            post.image = image
            post.text = text
            post.date = new Date

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

module.exports = updatePost