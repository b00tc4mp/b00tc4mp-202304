const context = require('./context')
const { ObjectId } = require('mongodb')

function createPost(userId, image, text) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof image !== 'string') throw new Error('image is not a string')
    if (typeof text !== 'string') throw new Error('text is not a string')

    const { users, posts } = context

    const userObjectId = new ObjectId(userId)

    return users.findOne({ _id: userObjectId })
        .then(user => {
            if (!user) throw new Error('user not found')

            const post = {
                author: userObjectId,
                image,
                text,
                date: new Date
            }

            return posts.insertOne(post)
        })
        .then(() => { })
}

module.exports = createPost