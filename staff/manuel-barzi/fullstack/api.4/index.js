const express = require('express')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createPost = require('./logic/createPost')
const retrievePosts = require('./logic/retrievePosts')
const updatePost = require('./logic/updatePost')
const deletePost = require('./logic/deletePost')
const cors = require('cors')
const mongodb = require('mongodb')
const context = require('./logic/context')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')
        const posts = db.collection('posts')

        context.users = users
        context.posts = posts

        const api = express()

        api.use(cors())

        api.get('/', (req, res) => res.send('Hello, API!'))

        api.post('/users', (req, res) => {
            let json = ''

            req.on('data', chunk => json += chunk)

            req.on('end', () => {
                try {
                    const { name, email, password } = JSON.parse(json)

                    registerUser(name, email, password)
                        .then(() => res.status(201).send())
                        .catch(error => res.status(400).json({ error: error.message }))
                } catch (error) {
                    res.status(400).json({ error: error.message })
                }
            })
        })

        api.post('/users/auth', (req, res) => {
            let json = ''

            req.on('data', chunk => json += chunk)

            req.on('end', () => {
                try {
                    const { email, password } = JSON.parse(json)

                    authenticateUser(email, password)
                        .then(userId => res.json(userId))
                        .catch(error => res.status(400).json({ error: error.message }))
                } catch (error) {
                    res.status(400).json({ error: error.message })
                }
            })
        })

        api.get('/users', (req, res) => {
            try {
                const { authorization } = req.headers

                const userId = authorization.slice(7)

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/posts', (req, res) => {
            let json = ''

            req.on('data', chunk => json += chunk)

            req.on('end', () => {
                try {
                    const { authorization } = req.headers

                    const userId = authorization.slice(7)

                    const { image, text } = JSON.parse(json)

                    createPost(userId, image, text)
                        .then(() => res.status(201).send())
                        .catch(error => res.status(400).json({ error: error.message }))
                } catch (error) {
                    res.status(400).json({ error: error.message })
                }
            })
        })

        api.get('/posts', (req, res) => {
            try {
                const { authorization } = req.headers

                const userId = authorization.slice(7)

                retrievePosts(userId)
                    .then(posts => res.json(posts))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/posts/:postId', (req, res) => {
            let json = ''

            req.on('data', chunk => json += chunk)

            req.on('end', () => {
                try {
                    const { authorization } = req.headers

                    const userId = parseInt(authorization.slice(7))

                    const postId = parseInt(req.params.postId)

                    const { image, text } = JSON.parse(json)

                    updatePost(userId, postId, image, text, error => {
                        if (error) {
                            res.status(400).json({ error: error.message })

                            return
                        }

                        res.status(204).send()
                    })
                } catch (error) {
                    res.status(400).json({ error: error.message })
                }
            })
        })

        api.delete('/posts/:postId', (req, res) => {
            try {
                const { authorization } = req.headers

                const userId = parseInt(authorization.slice(7))

                const postId = parseInt(req.params.postId)

                deletePost(userId, postId, error => {
                    if (error) {
                        res.status(400).json({ error: error.message })

                        return
                    }

                    res.status(204).send()
                })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.listen(8080, () => console.log('server listening in port 8080'))
    })