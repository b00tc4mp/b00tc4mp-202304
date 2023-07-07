const context = require('./context')
const { ObjectId } = require('mongodb')

function retrievePosts(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')

    const { users, posts } = context

    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error('user not found')

            return Promise.all([
                posts.find().toArray(),
                users.find().toArray()
            ])
        })
        .then(([posts, users]) => {
            // sanitize
            posts.forEach(post => {
                post.id = post._id.toString()
                delete post._id

                const user = users.find(user => user._id.toString() === post.author.toString())

                post.author = {
                    id: user._id.toString(),
                    name: user.name
                }
            })

            return posts
        })
}

module.exports = retrievePosts