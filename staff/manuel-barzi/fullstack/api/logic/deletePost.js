const { readFile, writeFile } = require('fs')

function deletePost(userId, postId, callback) {
    if (typeof userId !== 'number') throw new Error('userId is not a number')
    if (typeof postId !== 'number') throw new Error('postId is not a number')
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

            const index = posts.findIndex(post => post.id === postId)

            const post = posts[index]

            if (!post) {
                callback(new Error('post not found'))

                return
            }

            if (post.author !== userId) {
                callback(new Error('user is not the author of the post'))

                return
            }

            posts.splice(index, 1)

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

module.exports = deletePost