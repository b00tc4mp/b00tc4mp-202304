//TODO Wieso?
const context = require('./context')
const { ObjectId } = require('mongodb')

function retrievePost(userId, postId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')

    const { users, posts } = context

    return Promise.all([
        users.findOne({ _id: new ObjectId(userId) }),
        posts.findOne({ _id: new ObjectId(postId) })
    ])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user')

            delete post._id

            delete post.author

            return post
        })
}

module.exports = retrievePost