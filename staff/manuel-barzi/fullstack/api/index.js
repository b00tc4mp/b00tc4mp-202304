const express = require('express')
const retrieveUser = require('./logic/retrieveUser')

const api = express()

api.get('/helloworld', (req, res) => {
    res.send('<h1>Hello, World! :)</h1>')
})

// http://locahost:8080/hello?to=Peter
api.get('/hello', (req, res) => {
    const to = req.query.to

    res.send(`<h1>Hello, ${to}! :)</h1>`)
})

// http://locahost:8080/users?id=1
api.get('/users', (req, res) => {
    const userId = parseInt(req.query.id)

    try {
        retrieveUser(userId, (error, user) => {
            if (error) {
                res.status(400).json({ error: error.message })

                return
            }

            res.status(200).json(user)
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

api.listen(8080)