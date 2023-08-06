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
            return updatePost('649f03a216e7577e10b9dee9', '649eec3f528f40c585fefd41', 'imageNew', 'textNew')
                .then(() => console.log('post updated'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => client.close())