const mongodb = require('mongodb')

//const MongoClient = mongodb.MongoClient
const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')
        const posts = db.collection('posts')

        // return users.insertOne({ name: 'Pe Rito', email: 'pe@rito.com', password: '123123123' })
        // .then(() => {
        return users.updateOne({ email: 'pe@rito.com' }, { $set: { name: 'Ga Tito', email: 'ga@tito.com' } })
            .then(() => {
                return Promise.all([
                    users.find().toArray(), // 0
                    posts.find().toArray()  // 1
                ])
                    .then(results => {
                        const users = results[0]
                        const posts = results[1]

                        console.log(users)
                        console.log(posts)
                    })
            })
        // })
    })
    .then(() => client.close())
    .catch(error => console.error(error))
