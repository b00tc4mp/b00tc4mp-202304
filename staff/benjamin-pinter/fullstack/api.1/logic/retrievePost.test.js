const mongodb = require('mongodb')
const retrievePost = require('./retrievePost')
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
            return retrievePost('64a40c4a167445c6864b1898', '64a40bd8167445c6864b1896')
                .then(post => console.log(post))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => client.close())