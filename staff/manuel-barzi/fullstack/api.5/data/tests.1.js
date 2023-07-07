const mongodb = require('mongodb')

//const MongoClient = mongodb.MongoClient
const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')

        return users.find().toArray()
    })
    .then(users => {
        // console.table(users)
        console.log(users)

        return client.close()
    })