require('dotenv').config()

const express = require('express')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createPost = require('./logic/createPost')
const retrievePosts = require('./logic/retrievePosts')
const retrievePost = require('./logic/retrievePost')
const updatePost = require('./logic/updatePost')
const deletePost = require('./logic/deletePost')
const cors = require('cors')
const mongodb = require('mongodb')
const context = require('./logic/context')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const jsonBodyParser = bodyParser.json()

const { MongoClient } = mongodb

const client = new MongoClient(process.env.DB)

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

        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, email, password } = req.body

                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                authenticateUser(email, password)
                    .then(userId => {
                        const payload = { sub: userId }

                        const token = jwt.sign(payload, process.env.SECRET)

                        res.json(token)
                    })
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/users', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const payload = jwt.verify(token, process.env.SECRET)
                const { sub: userId } = payload

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const payload = jwt.verify(token, process.env.SECRET)
                const { sub: userId } = payload

                const { image, text } = req.body

                createPost(userId, image, text)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/posts', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const payload = jwt.verify(token, process.env.SECRET)
                const { sub: userId } = payload

                retrievePosts(userId)
                    .then(posts => res.json(posts))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/posts/:postId', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const payload = jwt.verify(token, process.env.SECRET)
                const { sub: userId } = payload

                const { postId } = req.params

                retrievePost(userId, postId)
                    .then(posts => res.json(posts))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/posts/:postId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const payload = jwt.verify(token, process.env.SECRET)
                const { sub: userId } = payload

                const postId = req.params.postId

                const { image, text } = req.body

                updatePost(userId, postId, image, text)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.delete('/posts/:postId', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const payload = jwt.verify(token, process.env.SECRET)
                const { sub: userId } = payload

                const postId = req.params.postId

                deletePost(userId, postId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.listen(process.env.PORT, () => console.log(`server listening in port ${process.env.PORT}`))
    })