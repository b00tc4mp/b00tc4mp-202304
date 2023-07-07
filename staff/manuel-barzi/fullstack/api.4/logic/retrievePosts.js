const context = require('./context')
const { ObjectId } = require('mongodb')

function retrievePosts(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')

    const { users, posts } = context

    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error('user not found')

            return posts.find().toArray()
        })
        .then(posts => {
            // sanitize
            posts.forEach(post => {
                post.id = post._id.toString()
                delete post._id

                post.author = post.author.toString()
            })

            return posts
        })
}

module.exports = retrievePosts