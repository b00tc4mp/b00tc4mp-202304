const context = require('./context')
const { ObjectId } = require('mongodb')

function deletePost(userId, postId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')

    const { users, posts } = context

    return users.findOne({ _id: new ObjectId(userId) })
        .then(user => {
            if (!user) throw new Error('user not found')
            return posts.findOne({_id: new ObjectId(postId)})
        })
        .then(post => {
            if (!post) throw new Error('post not found')
            if(post.author.toString() !== userId ) throw new Error('post does not belong to user')
            return posts.deleteOne({_id: new ObjectId(postId)})
        })
        .then(() => { })
}

module.exports = deletePost