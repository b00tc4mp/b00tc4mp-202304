const mongodb = require('mongodb')

//const MongoClient = mongodb.MongoClient
const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')
        const posts = db.collection('posts')

        // return users.insertOne({ name: 'Enes Meral', email: 'enes@meral.de', password: '1' })
        // .then(() => {
        return users.updateOne({ email: 'enes@meral.de' }, { $set: { name: 'Enes Meral', email: 'nizi@19.de' } })
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