const mongodb = require('mongodb')
const updatePost = require('./updatePost')
const context = require('./context')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')
        const posts = db.collection('posts')

        context.users = users
        context.posts = posts

        try {
            return updatePost('64a33c894e3ac5af1e1113ca', '64a33caa4e3ac5af1e1113cb', 'https://img.freepik.com/free-photo/world-smile-day-emojis-arrangement_23-2149024491.jpg?w=2000', 'Smile )')
                .then(() => console.log('post updated'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => client.close())
